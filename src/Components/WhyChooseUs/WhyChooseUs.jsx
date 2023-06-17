import Container from "../Container/Container";
import bgImg from "../../assets/bgImg.webp";
import WhyChooseUsImg from '../../assets/whyUsHero.webp'
import zero_investment from "../../assets/whyChooseUs/zero_investment.d5743aab.svg";
import customerSupport from "../../assets/whyChooseUs/customerSupport.5780cd23.svg";
import Fin_products from "../../assets/whyChooseUs/Fin_products.0e8a0582.svg";
import financialProduct from "../../assets/whyChooseUs/financialProduct.1b3d6eec.svg";
import Icon_support from "../../assets/whyChooseUs/Icon_support.c8382fc1.svg";
import quick_payout from "../../assets/whyChooseUs/quick_payout.1d689e09.svg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const WhyChooseUs = () => {
    return (
		<div className='py-[4vw] '>
			<Container>
				<div className='flex items-center py-[2rem]'>
					<img
						src={bgImg}
						alt=''
						className='w-[15%] h-[75%] pl-[1.5vw] absolute z-10'
					/>

					<div className="hidden md:block">
						<p className='text-[24px] leading-[36px] font-[600]'>
							Why{" "}
							<span className='text-[#145CC5]'>Choose Us</span>
						</p>
						<p className='text-[18px] leading-[26px] font-[500]'>
							Why we are loved by our customers
						</p>

						<img
							src={WhyChooseUsImg}
							alt=''
							className='mt-[3vw] relative z-20'
						/>
					</div>

					<div
						data-aos='fade-up'
						data-aos-duration='1000'
					>
						<div className='grid md:grid-cols-2 text-center md:text-left px-[2vw] py-[1vw]'>
							<div className='px-[30px] py-[20px]'>
								<img
									src={zero_investment}
									alt=''
									className=' md:w-[6vw] mx-auto md:mx-0'
								/>
								<p className='text-[20px] leading-[30px] tracking-[0.1rem] font-[600]'>
									Zero Investment
								</p>
								<p className='text-[16px] leading-[26px] font-[500] text-[#37384C]'>
									Build your business without any investment
								</p>
							</div>
							<div className='px-[30px] py-[20px]'>
								<img
									src={quick_payout}
									alt=''
									className=' md:w-[6vw] mx-auto md:mx-0'
								/>
								<p className='text-[20px] leading-[30px] tracking-[0.1rem] font-[600]'>
									Quick Payout
								</p>
								<p className='text-[16px] leading-[26px] font-[500] text-[#37384C]'>
									Direct Payout in your bank account in short
									time
								</p>
							</div>
							<div className='px-[30px] py-[20px]'>
								<img
									src={Fin_products}
									alt=''
									className=' md:w-[6vw] mx-auto md:mx-0'
								/>
								<p className='text-[20px] leading-[30px] tracking-[0.1rem] font-[600]'>
									Limitless Earnings
								</p>
								<p className='text-[16px] leading-[26px] font-[500] text-[#37384C]'>
									Direct Payout in your bank account in short
									time
								</p>
							</div>
							<div className='px-[30px] py-[20px]'>
								<img
									src={Icon_support}
									alt=''
									className=' md:w-[6vw] mx-auto md:mx-0'
								/>
								<p className='text-[20px] leading-[30px] tracking-[0.1rem] font-[600]'>
									Training & Upskilling
								</p>
								<p className='text-[16px] leading-[26px] font-[500] text-[#37384C]'>
									Get trained by finance and sales experts
								</p>
							</div>
							<div className='px-[30px] py-[20px]'>
								<img
									src={customerSupport}
									alt=''
									className=' md:w-[6vw] mx-auto md:mx-0'
								/>
								<p className='text-[20px] leading-[30px] tracking-[0.1rem] font-[600]'>
									Customer Support
								</p>
								<p className='text-[16px] leading-[26px] font-[500] text-[#37384C]'>
									Access tools and content to build
									relationship
								</p>
							</div>
							<div className='px-[30px] py-[20px]'>
								<img
									src={financialProduct}
									alt=''
									className=' md:w-[6vw] mx-auto md:mx-0'
								/>
								<p className='text-[20px] leading-[30px] tracking-[0.1rem] font-[600]'>
									Financial Products
								</p>
								<p className='text-[16px] leading-[26px] font-[500] text-[#37384C]'>
									Trustworthy & high-rated products &
									categories
								</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default WhyChooseUs;