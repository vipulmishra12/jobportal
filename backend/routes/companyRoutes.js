import express from "express"
import { isAuthenticated } from "../middlewares/isAuthenticated.js"
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/companyController.js"
import { singleUpload } from "../middlewares/multer.js";



const router = express.Router()

router.post('/register', isAuthenticated, registerCompany)
router.get('/getcompany', isAuthenticated, getCompany)
router.get('/getcompany/:id', isAuthenticated, getCompanyById)
router.put('/update/:id', singleUpload, isAuthenticated, updateCompany)

export default router