const prisma = require("../config/database");
const bcrypt = require("bcrypt");


exports.createUser = async(data)=>{

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return await prisma.user.create({
        data: {
            ...data,
            password: hashedPassword
        }
    });
}



exports.getUsers = async()=>{

    return await prisma.user.findMany();

}



exports.getUserById = async(id)=>{

    return await prisma.user.findUnique({
        where:{
            id:Number(id)
        }
    });

}



exports.updateUser = async(id,data)=>{


    return await prisma.user.update({

        where:{
            id:Number(id)
        },

        data

    });

}



exports.deleteUser = async(id)=>{


    return await prisma.user.delete({

        where:{
            id:Number(id)
        }

    });

}

exports.loginUser = async (username, password) => {

    const user = await prisma.user.findUnique({
        where: {
            username
        }
    });

    if (!user) {
        return null;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return null;
    }

    return user;
};