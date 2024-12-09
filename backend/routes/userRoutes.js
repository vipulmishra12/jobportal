import express from "express"
import { login, logout, register, updateProfile } from "../controllers/userController.js"
import { isAuthenticated } from "../middlewares/isAuthenticated.js"
import { singleUpload } from "../middlewares/multer.js"

const router = express.Router()

router.post('/register', singleUpload, register)
router.post('/login', login)
router.get('/logout', logout)
router.put('/profile/update', isAuthenticated, singleUpload, updateProfile)

export default router