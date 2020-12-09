import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listCarousel } from '../actions/carouselActions'

const ProductCarousel = () => {
	const dispatch = useDispatch()

	const carouselList = useSelector((state) => state.carouselList)
	const { loading, error, carousel } = carouselList

	console.log(carouselList)

	useEffect(() => {
		dispatch(listCarousel())
	}, [dispatch])

	return loading ? (
		<Loader />
	) : error ? (
		<Message variant='danger'>{error}</Message>
	) : (
		<Carousel pause='hover' className='bg-light carousel'>
			{carousel.map((car) => (
				<Carousel.Item key={car._id}>
					<Image src={car.image} alt={car.name} fluid />
				</Carousel.Item>
			))}
		</Carousel>
	)
}

export default ProductCarousel
