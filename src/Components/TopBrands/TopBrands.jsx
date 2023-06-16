import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import './TopBrands.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import brandImg1 from '../../assets/topBrands/image (1).webp'
import brandImg2 from '../../assets/topBrands/image (2).webp'
import brandImg3 from '../../assets/topBrands/image (3).webp'
import brandImg4 from '../../assets/topBrands/image (4).webp'
import brandImg5 from '../../assets/topBrands/image (5).webp'
import brandImg6 from '../../assets/topBrands/image (6).webp'
import brandImg7 from '../../assets/topBrands/image (7).webp'
import brandImg8 from '../../assets/topBrands/image (8).webp'
import brandImg9 from '../../assets/topBrands/image (9).webp'
import brandImg10 from '../../assets/topBrands/image (10).webp'

const TopBrands = () => {
    return (
		<div className='py-[2rem]'>
			<Container>
				<div className='pb-[2rem]'>
					<SectionTitle
						title={"Top Brands on ZET"}
						subTitle={"We are trusted by best brand in the country"}
					/>
				</div>

				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					loop={true}
					autoplay={{
						delay: 0,
						// disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 5,
							spaceBetween: 50,
						},
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					
					className='mySwiper'
				>
					<SwiperSlide>
						<div className='w-[180px] mr-[30px]'>
							<div className='py-3 border border-[#E7E7F0] rounded-lg flex justify-center items-center'>
								<img
									src={brandImg1}
									alt=''
									className='w-[8vw]'
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='w-[180px] mr-[30px]'>
							<div className='py-3 border border-[#E7E7F0] rounded-lg flex justify-center items-center'>
								<img
									src={brandImg2}
									alt=''
									className='w-[8vw]'
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='w-[180px] mr-[30px]'>
							<div className='py-3 border border-[#E7E7F0] rounded-lg flex justify-center items-center'>
								<img
									src={brandImg3}
									alt=''
									className='w-[8vw]'
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='w-[180px] mr-[30px]'>
							<div className='py-3 border border-[#E7E7F0] rounded-lg flex justify-center items-center'>
								<img
									src={brandImg4}
									alt=''
									className='w-[8vw]'
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='w-[180px] mr-[30px]'>
							<div className='py-3 border border-[#E7E7F0] rounded-lg flex justify-center items-center'>
								<img
									src={brandImg5}
									alt=''
									className='w-[8vw]'
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='w-[180px] mr-[30px]'>
							<div className='py-3 border border-[#E7E7F0] rounded-lg flex justify-center items-center'>
								<img
									src={brandImg6}
									alt=''
									className='w-[8vw]'
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='w-[180px] mr-[30px]'>
							<div className='py-3 border border-[#E7E7F0] rounded-lg flex justify-center items-center'>
								<img
									src={brandImg7}
									alt=''
									className='w-[8vw]'
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='w-[180px] mr-[30px]'>
							<div className='py-3 border border-[#E7E7F0] rounded-lg flex justify-center items-center'>
								<img
									src={brandImg8}
									alt=''
									className='w-[8vw]'
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='w-[180px] mr-[30px]'>
							<div className='py-3 border border-[#E7E7F0] rounded-lg flex justify-center items-center'>
								<img
									src={brandImg9}
									alt=''
									className='w-[8vw]'
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='w-[180px] mr-[30px]'>
							<div className='py-3 border border-[#E7E7F0] rounded-lg flex justify-center items-center'>
								<img
									src={brandImg10}
									alt=''
									className='w-[8vw]'
								/>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
				
			</Container>
		</div>
	);
};

export default TopBrands;