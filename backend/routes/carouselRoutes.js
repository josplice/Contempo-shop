import express from 'express'
import { getCarousel } from '../controllers/carouselController.js'

const router = express.Router()
router.route('/').get(getCarousel)

export default router
