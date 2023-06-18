/** @format */

import Container from "../../Components/Container/Container";
import PartnerWithUsImage from "../../assets/PartnerWithUsImage.webp";
import leftBG from "../../assets/leftBG.svg";
import rightBG from "../../assets/rightBG.svg";
import FinancialAdvicers from "../../assets/PartnerWithUs/FinancialAdvicers.webp";
import PartnerBrands from "../../assets/PartnerWithUs/PartnerBrands.webp";
import PincodesServed from "../../assets/PartnerWithUs/PincodesServed.webp";
import DetailsForm from "./DetailsForm/DetailsForm";
const PartnerWithUs = () => {
	return (
		<div className='relative'>
			<Container>
				<div className='  relative z-20'>
					<img
						src={PartnerWithUsImage}
						alt=''
						className='py-[4vw]'
					/>

					<div>
						<p className='text-[18px] md:text-[30px] font-[700] md:leading-[68px] leading-[28px]'>
							Partner with us
						</p>
					</div>

					<div>
						<p className='text-[12px] md:text-[24px] leading-[16px] md:leading-[32px] text-[#303541]'>
							Join us in our journey of expanding the distribution
							of financial products & services to all corners of
							India. We will help you increase your visibility in
							tier 2, 3 & 4 cities and towns of India and get
							quality customers at a fraction of the cost.
						</p>
					</div>

					<div className='grid  md:grid-cols-3 gap-1 my-[2vw]'>
						<div className='p-[1rem]'>
							<img
								src={PartnerBrands}
								alt=''
							/>
						</div>
						<div className='p-[1rem]'>
							<img
								src={PincodesServed}
								alt=''
							/>
						</div>
						<div className='p-[1rem]'>
							<img
								src={FinancialAdvicers}
								alt=''
							/>
						</div>
					</div>
				</div>
				<img
					src={leftBG}
					alt=''
					className='absolute -top-5 left-0'
				/>
				<img
					src={rightBG}
					alt=''
					className='absolute -top-5 right-0'
				/>
			</Container>
			<DetailsForm />
		</div>
	);
};

export default PartnerWithUs;
