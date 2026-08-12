// const service = require("../services/territory.service");




// exports.create = async(req,res)=>{


//     try{


//         await service.createTerritory(req.body);



//         res.status(201).json({

//             message:"success"

//         });



//     }catch(error){


//         res.status(500).json({

//             message:"error"

//         });


//     }


// }







// exports.getAll = async(req,res)=>{


//     try{


//         const territories = await service.getTerritories();


//         res.json(territories);



//     }catch(error){


//         res.status(500).json({

//             message:"error"

//         });


//     }


// }








// exports.getByOwnerId = async(req,res)=>{


//     try{


//         const territories = await service.getTerritoriesByOwnerId(
//             req.params.ownerId
//         );


//         res.json(territories);



//     }catch(error){


//         res.status(500).json({

//             message:"error"

//         });


//     }


// }


const service = require("../services/territory.service");



exports.create = async (req, res) => {

    try {

        await service.createTerritory(
            req.body
        );


        res.status(201).json({

            message: "success"

        });


    } catch (error) {

        console.error(
            "Territory creation error:",
            error.message
        );


        res.status(500).json({

            message: "error"

        });

    }

};




exports.getAll = async (req, res) => {

    try {

        const territories =
            await service.getTerritories();


        res.json(territories);


    } catch (error) {

        console.error(
            "Get territories error:",
            error.message
        );


        res.status(500).json({

            message: "error"

        });

    }

};




exports.getByOwnerId = async (req, res) => {

    try {

        const territories =
            await service.getTerritoriesByOwnerId(
                req.params.ownerId
            );


        res.json(territories);


    } catch (error) {

        console.error(
            "Get owner territories error:",
            error.message
        );


        res.status(500).json({

            message: "error"

        });

    }

};