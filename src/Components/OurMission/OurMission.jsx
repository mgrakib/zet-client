import ourMission from "../../assets/OurMission.webp";
const OurMission = () => {
    return (
		<div>
			<div className='relative h-[100vh]'>
				<img
					src={ourMission}
					alt=''
					className="h-full"
				/>

				<div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white text-center md:max-w-[600px]'>
					<h3 className='text-[24px] md:text-[40px] font-[700]'>OUR MISSION</h3>
					<p className='text-[16px] leading-[24px]'>
						Enabling financial inclusion for the next billion
						Indians & making their Zindagi Set. Building a platform
						that enables you to sell financial products & earn up to
						Rs. 1 lakh every month.
					</p>
					<div className='mt-2'>
						<p className='text-[16px] font-[800] leading-[43px] tracking-[.2rem]'>
							EARN BETTER. LIVE BETTER.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurMission;