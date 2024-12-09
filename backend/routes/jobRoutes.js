import express from "express"
import { isAuthenticated } from "../middlewares/isAuthenticated.js"
import { getAdminJobs, getAllJob, getJobById, postJob } from "../controllers/jobController.js"

const router = express.Router()

router.post('/postJob', isAuthenticated, postJob)
router.get('/getAllJob', isAuthenticated, getAllJob)
router.get('/getJobById/:id', isAuthenticated, getJobById)
router.get('/getAdminJobs', isAuthenticated, getAdminJobs)

export default router