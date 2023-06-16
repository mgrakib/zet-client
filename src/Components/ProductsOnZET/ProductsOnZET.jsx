/** @format */

import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import AccountSave from "../../assets/products/AccountSave.webp";
import bnpl from "../../assets/products/BNPL.webp";
import product1 from "../../assets/products/image (5).webp";
import loan from "../../assets/products/Loan.webp";
import leftBG from "../../assets/leftBG.svg";
import rightBG from "../../assets/rightBG.svg";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const ProductsOnZET = () => {
	return (
		<div
			style={{
				background: "linear-gradient(168deg, #EAF5FF 0%, #FDFEFF 100%)",
			}}
			className='pt-[2rem] pb-[8vw] relative'
		>
			<Container>
				<SectionTitle
					title={"Products on ZET"}
					subTitle={"We are trusted by best brand in the country"}
				/>

				<div
					data-aos='fade-up'
                    data-aos-duration='1000'
					className="relative z-10"
                    
				>
					<div className='grid grid-cols-2 gap-[2vw] mt-[4vw]'>
						<div
							style={{
								willChange: `will-change: transform; transition: all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s; transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
							}}
							className='flex items-center p-[2rem] bg-[#edffec] hover:bg-[#FFFFFF] rounded-md'
						>
							<div className='contents'>
								<img
									src={product1}
									alt=''
									className='w-[30%]'
								/>
							</div>
							<div className='flex flex-col pl-[1.5rem]'>
								<h4 className='text-[20px] font-[600] leading-[30px] lette tracking-[0.1rem]'>
									CREDIT CARDS
								</h4>
								<p className='text-[16px] leading-[24px] font-[500]'>
									100% Contactless Application Process with
									Instant Approval From Top Banks.
								</p>
							</div>
						</div>
						<div className='flex items-center p-[2rem] bg-[#fff1ca] hover:bg-[#FFFFFF] rounded-md'>
							<div className='contents'>
								<img
									src={loan}
									alt=''
									className='w-[30%]'
								/>
							</div>
							<div className='flex flex-col pl-[1.5rem]'>
								<h4 className='text-[20px] font-[600] leading-[30px] lette tracking-[0.1rem]'>
									LOANS
								</h4>
								<p className='text-[16px] leading-[24px] font-[500]'>
									100% online process. Instant offers.
									Affordable Rate of Interest on loans.
								</p>
							</div>
						</div>
						<div className='flex items-center p-[2rem] bg-[#ffeee7] hover:bg-[#FFFFFF] rounded-md'>
							<div className='contents'>
								<img
									src={bnpl}
									alt=''
									className='w-[30%]'
								/>
							</div>
							<div className='flex flex-col pl-[1.5rem]'>
								<h4 className='text-[20px] font-[600] leading-[30px] lette tracking-[0.1rem]'>
									BUY NOW PAY LATER
								</h4>
								<p className='text-[16px] leading-[24px] font-[500]'>
									Short-term financing that allows consumers
									to make purchases and pay for them over
									time.
								</p>
							</div>
						</div>
						<div className='flex items-center p-[2rem] bg-[#fff5e7] hover:bg-[#FFFFFF] rounded-md'>
							<div className='contents'>
								<img
									src={AccountSave}
									alt=''
									className='w-[30%]'
								/>
							</div>
							<div className='flex flex-col pl-[1.5rem]'>
								<h4 className='text-[20px] font-[600] leading-[30px] lette tracking-[0.1rem]'>
									SAVING ACCOUNTS
								</h4>
								<p className='text-[16px] leading-[24px] font-[500]'>
									ZET offers range of savings account that
									suits your personal needs for the banking.
								</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<img
				src={leftBG}
				alt=''
				className='absolute top-2 left-0 z-0'
			/>
			<img
				src={rightBG}
				alt=''
				className='absolute bottom-0 right-0 z-0'
			/>
		</div>
	);
};

export default ProductsOnZET;
