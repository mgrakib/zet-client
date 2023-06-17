/** @format */

import Container from "../Container/Container";
import InvCompany1 from "../../assets/MeetInvestors/InvCompany1.webp";
import InvCompany2 from "../../assets/MeetInvestors/InvCompany2.webp";
import InvCompany3 from "../../assets/MeetInvestors/InvCompany3.webp";
import InvCompany4 from "../../assets/MeetInvestors/InvCompany4.webp";

import Inv1 from "../../assets/MeetInvestors/Inv1.webp";
import Inv2 from "../../assets/MeetInvestors/Inv2.webp";
import Inv3 from "../../assets/MeetInvestors/Inv3.webp";
import Inv4 from "../../assets/MeetInvestors/Inv4.webp";
import Inv5 from "../../assets/MeetInvestors/Inv5.webp";
import Inv6 from "../../assets/MeetInvestors/Inv6.webp";
import Inv7 from "../../assets/MeetInvestors/Inv7.webp";
import Inv8 from "../../assets/MeetInvestors/Inv8.webp";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const MeetInvestors = () => {
	return (
		<div className='pb-[8rem] pt-[2rem]'>
			<Container>
				<h4 className='text-[40px] font-[800] leading-[40px] text-[#303541] my-[32px]'>
					Meet the Investors
				</h4>

				<div>
					<div
						data-aos='fade-up'
						data-aos-duration='1000'
					>
						<div className='grid grid-cols-3 gap-[2vw]'>
							<div className='p-[2rem] group '>
								<img
									src={InvCompany1}
									alt=''
									className='group-hover:scale-105 duration-200'
								/>
							</div>
							<div className='p-[2rem] group'>
								<img
									src={InvCompany2}
									alt=''
									className='group-hover:scale-105 duration-200'
								/>
							</div>
							<div className='p-[2rem] group'>
								<img
									src={InvCompany3}
									alt=''
									className='group-hover:scale-105 duration-200'
								/>
							</div>
							<div className='p-[2rem] group'>
								<img
									src={InvCompany4}
									alt=''
									className='group-hover:scale-105 duration-200'
								/>
							</div>
						</div>
					</div>
				</div>

				<div className='pt-[2vw] pb-[8vw] relative grid grid-cols-3 gap-[2vw]'>
					<div className='group'>
						<div className='p-[1rem] flex flex-col group-hover:scale-[1.02] duration-200'>
							<div>
								<img
									src={Inv1}
									alt=''
								/>
							</div>
							<h3 className='mt-4 text-[#303541] text-[18px] font-[500]'>
								Kunal Shah
							</h3>
							<p className='text-[#8691A8] text-[16px] font-[500]'>
								Founder, CRED
							</p>
						</div>
					</div>
					<div className='group'>
						<div className='p-[1rem] flex flex-col group-hover:scale-[1.02] duration-200'>
							<div>
								<img
									src={Inv2}
									alt=''
								/>
							</div>
							<h3 className='mt-4 text-[#303541] text-[18px] font-[500]'>
								Gaurav Munjal
							</h3>
							<p className='text-[#8691A8] text-[16px] font-[500]'>
								Founder, UNACADEMY
							</p>
						</div>
					</div>
					<div className='group'>
						<div className='p-[1rem] flex flex-col group-hover:scale-[1.02] duration-200'>
							<div>
								<img
									src={Inv3}
									alt=''
								/>
							</div>
							<h3 className='mt-4 text-[#303541] text-[18px] font-[500]'>
								Aakrit Vaish
							</h3>
							<p className='text-[#8691A8] text-[16px] font-[500]'>
								Co-Founder, HAPTIK
							</p>
						</div>
					</div>
					<div className='group'>
						<div className='p-[1rem] flex flex-col group-hover:scale-[1.02] duration-200'>
							<div>
								<img
									src={Inv4}
									alt=''
								/>
							</div>
							<h3 className='mt-4 text-[#303541] text-[18px] font-[500]'>
								Harshil Mathur
							</h3>
							<p className='text-[#8691A8] text-[16px] font-[500]'>
								Founder, RAZORPAY
							</p>
						</div>
					</div>
					<div className='group'>
						<div className='p-[1rem] flex flex-col group-hover:scale-[1.02] duration-200'>
							<div>
								<img
									src={Inv5}
									alt=''
								/>
							</div>
							<h3 className='mt-4 text-[#303541] text-[18px] font-[500]'>
								Vidit Aatrey
							</h3>
							<p className='text-[#8691A8] text-[16px] font-[500]'>
								Founder & CEO, MEESHO
							</p>
						</div>
					</div>
					<div className='group'>
						<div className='p-[1rem] flex flex-col group-hover:scale-[1.02] duration-200'>
							<div>
								<img
									src={Inv6}
									alt=''
								/>
							</div>
							<h3 className='mt-4 text-[#303541] text-[18px] font-[500]'>
								Amrish Rau
							</h3>
							<p className='text-[#8691A8] text-[16px] font-[500]'>
								CEO, PINELABS
							</p>
						</div>
					</div>
					<div className='group'>
						<div className='p-[1rem] flex flex-col group-hover:scale-[1.02] duration-200'>
							<div>
								<img
									src={Inv7}
									alt=''
								/>
							</div>
							<h3 className='mt-4 text-[#303541] text-[18px] font-[500]'>
								Lalit Keshre
							</h3>
							<p className='text-[#8691A8] text-[16px] font-[500]'>
								CEO, GROWW
							</p>
						</div>
					</div>
					<div className='group'>
						<div className='p-[1rem] flex flex-col group-hover:scale-[1.02] duration-200'>
							<div>
								<img
									src={Inv8}
									alt=''
								/>
							</div>
							<h3 className='mt-4 text-[#303541] text-[18px] font-[500]'>
								Gokul Rajaram
							</h3>
							<p className='text-[#8691A8] text-[16px] font-[500]'>
								Product, DOORDASH
							</p>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default MeetInvestors;
