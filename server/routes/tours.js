import express from 'express'
import {createtour} from '../Controllers/TourController.js'
const router = express.Router()

router.post('/',createtour)

export default router