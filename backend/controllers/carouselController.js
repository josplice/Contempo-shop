import asyncHandler from 'express-async-handler'
import Carousel from '../models/carouselModel.js'

//@description: Get carousel images
//@route: GET /api/carousel/
//@access: public
const getCarousel = asyncHandler(async (req, res) => {
	const carousel = await Carousel.find({})
	res.json(carousel)
})

export { getCarousel }
