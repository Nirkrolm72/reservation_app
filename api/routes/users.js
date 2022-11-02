import express from "express";
import { createUser, deleteUsers, getAllUsers, getUserById, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkAuthentication", verifyToken, (req, res, next) => {
//     res.send("Hello user, you are authenticated")
// })

// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello user, you are authenticated and you can delete your account")
// })

// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello user, you are authenticated and you can delete all accounts")
// })

// UPDATE
router.put('/:id', verifyUser ,updateUser);

// DELETE
router.delete('/:id', verifyUser, deleteUsers);

// GET
router.get('/:id', verifyUser, getUserById);

// GET ALL
router.get('/', verifyAdmin, getAllUsers);

export default router;