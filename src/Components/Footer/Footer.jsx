import aboutUs from "../../assets/AboutUs.webp";
import Container from "../Container/Container";
import logo from "../../assets/zet_logo_white.svg";
import { Link } from "react-router-dom";
import { FiMail, FiPhone } from "react-icons/fi";


import {
    FaFacebookSquare,
	FaInstagramSquare,
	FaLinkedin,
    FaTelegramPlane,
    FaWhatsappSquare
} from "react-icons/fa";
const Footer = () => {
    return (
		<div className="relative h-[100vh] bg-red-400">
			<img
				src={aboutUs}
				alt=''
				className="h-[100%] object-cover"
			/>
			<div className='py-[30px] md:py-[2rem] absolute top-0 '>
				<Container>
					<div>
						<div className='border-b flex w-full justify-start py-5'>
							<img
								src={logo}
								alt=''
								className='w-[99px] md:-ml-5'
							/>
						</div>

						<div className='w-full mt-[3vw]'>
							<div className='grid grid-cols-3 md:grid-cols-4 text-white'>
								<div className='flex flex-col'>
									<p className='text-[18px] font-[500] mb-4'>
										COMPANY
									</p>
									<Link className='text-[16px] font-[400] mb-3'>
										About Us
									</Link>
									<Link className='text-[16px] font-[400] mb-3'>
										Partner with us
									</Link>
									<Link className='text-[16px] font-[400] mb-3'>
										Blog
									</Link>
								</div>
								<div className='flex flex-col'>
									<p className='text-[18px] font-[500] mb-4'>
										LEGAL
									</p>
									<Link className='text-[16px] font-[400] mb-3'>
										Privacy Policy
									</Link>
									<Link className='text-[16px] font-[400] mb-3'>
										Terms of Use
									</Link>
								</div>
								<div className='flex flex-col'>
									<p className='text-[18px] font-[500] mb-4'>
										CONTACT
									</p>
									<Link className='text-[16px] font-[400] mb-3'>
										<span className='flex items-center gap-2'>
											<FiMail /> hi@zetapp.in
										</span>
									</Link>
									<Link className='text-[16px] font-[400] mb-3'>
										<span className='flex items-center gap-2'>
											<FiPhone />
											+91-7417274072{" "}
										</span>
									</Link>
								</div>
								<div className='flex flex-col'>
									<p className='text-[18px] font-[500] mb-4'>
										SOCIAL
									</p>
									<div className='flex gap-4'>
										<Link className='text-[32px] font-[400] mb-3 '>
											<FaLinkedin />
										</Link>
										<Link className='text-[32px] font-[400] mb-3 '>
											<FaInstagramSquare />
										</Link>
										<Link className='text-[32px] font-[400] mb-3 '>
											<FaFacebookSquare />
										</Link>
										<Link className='text-[32px] font-[400] mb-3 '>
											<FaTelegramPlane />
										</Link>
										<Link className='text-[32px] font-[400] mb-3 '>
											<FaWhatsappSquare />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Footer;