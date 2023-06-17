import Growth from "../../assets/Growth.webp";
import Container from "../Container/Container";
const HowWeEvolved = () => {
    return (
		<div className='mt-[48px] mb-[24px] text-center'>
			
				<h3 className='text-[#303541] text-[40px] font-[800]'>
					How we evolved over the years
				</h3>

				<div className=' overflow-x-scroll'>
					<div className="w-[250%] md:w-[80%]  mx-auto">

						<img
							src={Growth}
							alt=''
							className=' h-auto mt-[76px]'
						/>
					</div>
				</div>
			
		</div>
	);
};

export default HowWeEvolved;