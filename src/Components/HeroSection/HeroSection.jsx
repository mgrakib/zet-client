/** @format */

import Container from "../Container/Container";
import heroImg from '../../assets/HeroImgNew.webp'
import googlePlay from '../../assets/googlePlayBtn.svg'
import AOS from "aos";
import "aos/dist/aos.css"; 

AOS.init();
const HeroSection = () => {
    return (
		<div
			data-aos='fade-up'
			data-aos-duration='1000'
		>
			<div className='py-[2rem]'>
				<Container>
					<div className='mt-[6vw] mb-[4vw] bg-light-bg-color flex flex-col md:flex-row items-center rounded-md'>
						{/* hero section text  */}
						<div className='p-[4vw] flex flex-col md:w-[55%]'>
							<h1 className='text-[40px] leading-[52px] font-bold mb-3'>
								Become a Financial Advisor and{" "}
								<span className='text-primary-color'>
									Earn Rs.1 Lakh/Month
								</span>
							</h1>
							<p className='text-[20px] mb-4'>
								No investment required
							</p>
							<div className=''>
								<img
									src={googlePlay}
									alt=''
									className='w-[150px] px-[1rem] h-[35px]'
								/>
							</div>
						</div>

						{/* heor img  */}
						<div className='mt-[-4vw] md:w-[45%] '>
							<img
								src={heroImg}
								alt=''
								className='md:w-[32vw]'
							/>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default HeroSection;
