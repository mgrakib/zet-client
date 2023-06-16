const SectionTitle = ({title, subTitle}) => {
    return (
		<div className="flex flex-col items-center">
			<h4 className='text-[24px] leading-[36px] font-semibold'>
				{title}
			</h4>
			<p className='text-[18px] leading-[26px] font-[400]'>{subTitle}</p>
		</div>
	);
};

export default SectionTitle;