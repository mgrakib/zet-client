/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../Container/Container";
import img from "../../assets/peeps1.webp";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
const Feature = () => {
	return (
		<div
			style={{ clipPath: "polygon(0% 25%, 100% 0%, 100% 75%, 0% 100%)" }}
			className='py-[10vw] bg-primary-color'
		>
			<Container>
				<div
					style={{
						clipPath: `polygon(0px 30%, 100% 0%, 100% 70%, 0px 100%)`,
					}}
					className='flex items-center rounded pt-[7vw] pb-[4vw] md:pb-[3vw] bg-[#417FDA]'
				>
					<div className='hidden md:block'>
						<img
							src={img}
							alt=''
							className='w-auto h-[27vw] mix-blend-luminosity'
						/>
					</div>

					<div className='p-[4vw] md:-ml-[10vw] w-full md:w-2/3'>
						<p className='text-[.7rem] mt-8 md:mt-0 md:text-[1.3rem] mb-[2vw] font-[800] tracking-[2px] text-white '>
							THE ZET EFFECT
						</p>

						<div>
							<Swiper
								centeredSlides={true}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								pagination={{
									clickable: true,
								}}
								navigation={true}
								modules={[Autoplay, Pagination, Navigation]}
								className='mySwiper'
							>
								<SwiperSlide>
									<p className='text-[24px] md:text-[32px] font-[800] leading-[40px] text-white'>
										We helped customers in more than 50
										cities to get their first financial
										product
									</p>
								</SwiperSlide>
								<SwiperSlide>
									<p className='text-[24px] md:text-[32px] font-[800] leading-[40px] text-white'>
										14 Lakh+ Financial Advisor across India
										are using ZET to increase their income.
									</p>
								</SwiperSlide>
								<SwiperSlide>
									<p className='text-[24px] md:text-[32px] font-[800] leading-[40px] text-white'>
										More than ₹20 Cr earned by our Agents by
										selling Credit Cards and Loans
									</p>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Feature;
