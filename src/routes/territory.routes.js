// const router = require("express").Router();


// const controller = require("../controllers/territory.controller");



// router.post("/",controller.create);



// router.get("/",controller.getAll);



// router.get("/:ownerId",controller.getByOwnerId);



// module.exports = router;

const router = require("express").Router();

const controller =
    require("../controllers/territory.controller");



router.post(
    "/",
    controller.create
);



router.get(
    "/",
    controller.getAll
);



router.get(
    "/owner/:ownerId",
    controller.getByOwnerId
);



module.exports = router;