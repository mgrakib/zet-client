import Container from "../Container/Container";
import img from "../../assets/peeps1.webp";

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
					className='flex items-center rounded pt-[7vw] pb-[3vw] bg-[#417FDA]'
				>
					<div className=''>
						<img
							src={img}
							alt=''
							className='w-auto h-[27vw] mix-blend-luminosity'
						/>
					</div>

					<div className='p-[4vw] -ml-[10vw] flex-1'>
						<p className='text-[1.3rem] mb-[2vw] font-[800] tracking-[2px] text-white '>
							THE ZET EFFECT
						</p>

						<div>
							<p className='text-[32px] font-[800] leading-[40px] text-white'>
								We helped customers in more than 50 cities to
								get their first financial product
							</p>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Feature;