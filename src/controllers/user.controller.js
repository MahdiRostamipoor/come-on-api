const service = require("../services/user.service");



exports.create = async(req,res)=>{

try{

const user = await service.createUser(req.body);

res.status(201).json(user);


}catch(error){

res.status(500).json({
message:error.message
});

}

}




exports.getAll = async(req,res)=>{

try{

const users = await service.getUsers();

res.json(users);


}catch(error){

res.status(500).json({
message:error.message
});

}

}




exports.getOne = async(req,res)=>{

try{

const user = await service.getUserById(req.params.id);


if(!user)
return res.status(404).json({
message:"User not found"
});


res.json(user);



}catch(error){

res.status(500).json({
message:error.message
});

}

}




exports.update = async(req,res)=>{


try{


const user = await service.updateUser(
req.params.id,
req.body
);


res.json(user);



}catch(error){

res.status(500).json({
message:error.message
});

}

}




exports.remove = async(req,res)=>{


try{


await service.deleteUser(req.params.id);


res.json({
message:"User deleted"
});



}catch(error){

res.status(500).json({
message:error.message
});

}

}


exports.login = async (req, res) => {

    try {

        const { username, password } = req.body;

        const user = await service.loginUser(
            username,
            password
        );

        if (!user) {
            return res.status(401).json({
                message: "Invalid username or password"
            });
        }

        res.json({
            message: "Login successful",
            user
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};