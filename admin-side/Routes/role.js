const express = require("express");
const RoleController = require("../Controllers/RoleController")
const verifyToken = require("../Middleware/Auth");


const router = express.Router();
router.get("/",RoleController.GetRoles)
router.get("/:id",RoleController.GetDetailRole)
router.post("/",RoleController.AddRole)
router.put("/:id",RoleController.UpdateRole)
router.delete("/:id",RoleController.DeleteRole)


module.exports = router