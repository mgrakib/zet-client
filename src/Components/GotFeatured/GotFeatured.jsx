import Container from "../Container/Container";
import bgImg from "../../assets/gotFetured/bgImg.webp";
import BusinessStandard from "../../assets/gotFetured/BusinessStandard.webp";
import Inc42 from "../../assets/gotFetured/Inc42.webp";
import mint from "../../assets/gotFetured/mint.webp";
import YourStory from "../../assets/gotFetured/YourStory.webp";

const GotFeatured = () => {
    return (
		<div className='pb-[2rem] md:pb-[8rem] pt-[2rem] bg-[#FAFBFE]'>
			<Container>
				<h4 className='text-[24px] md:text-[40px] font-[800] leading-[40px] text-[#303541] my-[32px]'>
					Got Featured
				</h4>

				<div>
					<div className='flex gap-[5px]'>
						<div>
							<img
								src={bgImg}
								alt=''
							/>
						</div>
						<div>
							<img
								src={Inc42}
								alt=''
							/>
						</div>
						<div>
							<img
								src={mint}
								alt=''
							/>
						</div>
						<div>
							<img
								src={YourStory}
								alt=''
							/>
						</div>
						<div>
							<img
								src={BusinessStandard}
								alt=''
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default GotFeatured;