const router = require("express").Router();


const controller = require("../controllers/user.controller");



router.post("/",controller.create);


router.get("/",controller.getAll);

router.post("/login", controller.login);

router.get("/:id",controller.getOne);


router.put("/:id",controller.update);


router.delete("/:id",controller.remove);



module.exports = router;