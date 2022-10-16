import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Pagination } from "swiper";

function Slider ({ product }) {
	return (
		<>
			<img className='img-fluid rounded-4' src={`/Images/products/${product.image}`} alt=""/>
			{/*<Swiper*/}
			{/*	spaceBetween={0}*/}
			{/*	pagination={{*/}
			{/*		clickable: false,*/}
			{/*	}}*/}
			{/*	modules={[Pagination]}*/}
			{/*	className="mySwiper"*/}
			{/*>*/}
			{/*	<SwiperSlide className='bg-info'>Slide 1</SwiperSlide>*/}
			{/*	<SwiperSlide className='bg-dark'>Slide 2</SwiperSlide>*/}
			{/*	<SwiperSlide>Slide 3</SwiperSlide>*/}
			{/*	<SwiperSlide>Slide 4</SwiperSlide>*/}
			{/*	<SwiperSlide>Slide 5</SwiperSlide>*/}
			{/*	<SwiperSlide>Slide 6</SwiperSlide>*/}
			{/*	<SwiperSlide>Slide 7</SwiperSlide>*/}
			{/*	<SwiperSlide>Slide 8</SwiperSlide>*/}
			{/*	<SwiperSlide>Slide 9</SwiperSlide>*/}
			{/*</Swiper>*/}
		</>
	);
}

export default Slider