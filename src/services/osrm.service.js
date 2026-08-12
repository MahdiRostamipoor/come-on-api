const axios = require("axios");


const OSRM_BASE_URL =
    process.env.OSRM_BASE_URL || "http://localhost:5000";


const MAX_POINTS_PER_REQUEST = 100;


function chunkArray(array, size) {

    const chunks = [];

    for (let i = 0; i < array.length; i += size) {

        chunks.push(
            array.slice(i, i + size)
        );

    }

    return chunks;
}



async function matchChunk(points) {

    const coordinates = points
        .map(point => {

            return `${point.lng},${point.lat}`;

        })
        .join(";");


    const url =
        `${OSRM_BASE_URL}/match/v1/foot/${coordinates}`;


    const response = await axios.get(url, {

        params: {

            geometries: "geojson",

            overview: "full",

            radiuses: points
                .map(() => "25")
                .join(";")

        },

        timeout: 10000

    });


    const data = response.data;


    if (
        data.code !== "Ok" ||
        !data.matchings ||
        data.matchings.length === 0
    ) {

        throw new Error(
            `OSRM match failed: ${data.code}`
        );

    }


    const coordinatesResult =
        data.matchings.flatMap(
            matching =>
                matching.geometry.coordinates
        );


    return coordinatesResult;
}



exports.matchLocation = async (location) => {

    if (!Array.isArray(location)) {

        throw new Error(
            "location must be an array"
        );

    }


    if (location.length < 2) {

        throw new Error(
            "At least 2 location points are required"
        );

    }


    const chunks =
        chunkArray(
            location,
            MAX_POINTS_PER_REQUEST
        );


    let allMatchedCoordinates = [];


    for (const chunk of chunks) {

        const matched =
            await matchChunk(chunk);


        allMatchedCoordinates =
            allMatchedCoordinates.concat(
                matched
            );

    }


    return allMatchedCoordinates;
};