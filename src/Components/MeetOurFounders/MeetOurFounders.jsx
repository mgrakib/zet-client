/** @format */

import Container from "../Container/Container";


import Lokesh from "../../assets/founders/Lokesh.webp";
import Manish from "../../assets/founders/Manish.webp";
import Yash from "../../assets/founders/Yash.webp";
import LinkedIn from "../../assets/founders/LinkedIn.webp";

import AboutUsFooter from "../../assets/founders/AboutUsFooter.webp";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const MeetOurFounders = () => {
	return (
		<>
			<div className='pb-[8rem] pt-[2rem] bg-[#ECF5FF]'>
				<Container>
					<h4 className='text-[24px] md:text-[40px] font-[800] md:leading-[40px] leading-[32px] text-[#303541]  text-center'>
						Meet the Investors
					</h4>
					<p className='text-center text-[16px] md:text-[24px] font-[400] mt-[10px] leading-[32px] md:leading-[40px]'>
						Few words from founders desk
					</p>

					<div
						data-aos='fade-up'
						data-aos-duration='1000'
					>
						<div className='pt-[2vw] relative grid md:grid-cols-3 gap-[2vw]'>
							<div className='group'>
								<div className='p-[1rem] flex flex-col group-hover:scale-[1.02] duration-200'>
									<div>
										<img
											src={Manish}
											alt=''
										/>
									</div>
									<div className='flex items-center justify-between'>
										<div>
											<h3 className='mt-4 text-[#303541] text-[16px] md:text-[24px] font-[500]'>
												Manish Shara
											</h3>
											<p className='text-[#8691A8] text-[14px] md:text-[20px] font-[500]'>
												Co- Founder & CEO
											</p>
										</div>
										<div>
											<img
												src={LinkedIn}
												alt=''
												className='h-[40px] w-[40px]'
											/>
										</div>
									</div>
								</div>
							</div>
							<div className='group'>
								<div className='p-[1rem] flex flex-col group-hover:scale-[1.02] duration-200'>
									<div>
										<img
											src={Yash}
											alt=''
										/>
									</div>
									<div className='flex items-center justify-between'>
										<div>
											<h3 className='mt-4 text-[#303541] text-[16px] md:text-[24px] font-[500]'>
												Manish Shara
											</h3>
											<p className='text-[#8691A8] text-[14px] md:text-[20px] font-[500]'>
												Co- Founder & CEO
											</p>
										</div>
										<div>
											<img
												src={LinkedIn}
												alt=''
												className='h-[40px] w-[40px]'
											/>
										</div>
									</div>
								</div>
							</div>
							<div className='group'>
								<div className='p-[1rem] flex flex-col group-hover:scale-[1.02] duration-200'>
									<div>
										<img
											src={Lokesh}
											alt=''
										/>
									</div>
									<div className='flex items-center justify-between'>
										<div>
											<h3 className='mt-4 text-[#303541] text-[16px] md:text-[24px] font-[500]'>
												Manish Shara
											</h3>
											<p className='text-[#8691A8] text-[14px] md:text-[20px] font-[500]'>
												Co- Founder & CEO
											</p>
										</div>
										<div>
											<img
												src={LinkedIn}
												alt=''
												className='h-[40px] w-[40px]'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>

			<div>
				<img
					src={AboutUsFooter}
					alt=''
				/>
			</div>
		</>
	);
};

export default MeetOurFounders;
