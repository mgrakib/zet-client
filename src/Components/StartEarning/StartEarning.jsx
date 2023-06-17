/** @format */

import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import googlePlay from "../../assets/googlePlayBtn.svg";
import earningDec from "../../assets/earningDec.b2e9943b.svg";
import step3 from "../../assets/media/Step3.mp4";
import "./StartEarning.css";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const StartEarning = () => {
	
	return (
		<div
			
			className='bg-[#0A2540] pt-[30vw] pb-[20vw] relative bg-clip'
		>
			<Container>
				<div className='text-white mt-[2vw] mb-[5vw]'>
					<SectionTitle
						title={"Start Earning in 3 Easy Steps"}
						subTitle={"Start Earning in 3 Easy Steps"}
					/>
				</div>

				<div className=''>
					<Swiper
						spaceBetween={0}
						centeredSlides={true}
						autoplay={{
							delay: 5000,
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
							<div className='flex flex-col md:flex-row items-center z-10 relative'>
								<div className='p-[10vw] flex flex-col  items-start flex-1 order-1'>
									<p
										style={{
											clipPath: `polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)`,
										}}
										className='text-[18px] py-3 pl-[26px] pr-[28px] bg-primary-color text-white font-[500] mb-[2vw]'
									>
										Step 1
									</p>

									<p className='text-[#9ECFFF] text-[32px] leading-[40px] font-[800] mb-[2vw] '>
										Download the App and Sign up as a ZET
										agent
									</p>

									<div>
										<img
											src={googlePlay}
											alt=''
											className='w-[120px]'
										/>
									</div>
								</div>

								<div className='h-[76vw] md:h-[36vw]  '>
									<video
										autoPlay
										muted
										loop
										className='h-[100%] rounded-[24px] w-auto'
									>
										<source
											src={step3}
											type='video/mp4'
										/>
									</video>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='flex flex-col md:flex-row items-center z-10 relative'>
								<div className='p-[10vw] flex flex-col  items-start flex-1 order-1'>
									<p
										style={{
											clipPath: `polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)`,
										}}
										className='text-[18px] py-3 pl-[26px] pr-[28px] bg-primary-color text-white font-[500] mb-[2vw]'
									>
										Step 2
									</p>

									<p className='text-[#9ECFFF] text-[32px] leading-[40px] font-[800] mb-[2vw] '>
										Register your customers and Recommend
										financial products
									</p>

									<div>
										<img
											src={googlePlay}
											alt=''
											className='w-[120px]'
										/>
									</div>
								</div>

								<div className='h-[76vw] md:h-[36vw] '>
									<video
										autoPlay
										muted
										loop
										className='h-[100%] rounded-[24px] w-auto'
									>
										<source
											src={step3}
											type='video/mp4'
										/>
									</video>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='flex flex-col md:flex-row items-center z-10 relative'>
								<div className='p-[10vw] flex flex-col  items-start flex-1 order-1'>
									<p
										style={{
											clipPath: `polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)`,
										}}
										className='text-[18px] py-3 pl-[26px] pr-[28px] bg-primary-color text-white font-[500] mb-[2vw]'
									>
										Step 1
									</p>

									<p className='text-[#9ECFFF] text-[32px] leading-[40px] font-[800] mb-[2vw] '>
										Start earning upto ₹ 1 Lakh every month
									</p>

									<div>
										<img
											src={googlePlay}
											alt=''
											className='w-[120px]'
										/>
									</div>
								</div>

								<div className='h-[76vw] md:h-[36vw] '>
									<video
										autoPlay
										muted
										loop
										className='h-[100%] rounded-[24px] w-auto'
									>
										<source
											src={step3}
											type='video/mp4'
										/>
									</video>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>

					<img
						src={earningDec}
						alt=''
						className='absolute top-[22%] right-[9%]'
					/>
				</div>
			</Container>
		</div>
	);
};

export default StartEarning;
