const prisma = require("../config/database");



exports.createTerritory = async(data)=>{


    await prisma.territory.create({

        data:{
            ownerId:data.ownerId,
            location:data.location
        }

    });


    return true;

}





exports.getTerritories = async()=>{


    return await prisma.territory.findMany({

        orderBy:{
            date:"desc"
        }

    });


}





exports.getTerritoriesByOwnerId = async(ownerId)=>{


    return await prisma.territory.findMany({

        where:{
            ownerId:Number(ownerId)
        },

        orderBy:{
            date:"desc"
        }

    });


}