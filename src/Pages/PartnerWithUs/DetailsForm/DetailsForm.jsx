import Container from "../../../Components/Container/Container";

const DetailsForm = () => {
    return (
		<div>
			<Container>
				<div>
					<p className='text-[18px] md:text-[30px] font-[700] md:leading-[68px] leading-[28px]'>
						Partner with us
					</p>
				</div>

				<div className='py-[20px]'>
					<label
						htmlFor=''
						className='text-[#2F3541] block'
					>
						Organisation Name{" "}
						<span className='text-red-500'>*</span>
					</label>

					<input
						type='text'
						className='w-full block h-[35px] border  border-[#CCCCCC] pl-2 my-[2px] rounded'
					/>
				</div>
				<div className='py-[20px]'>
					<label
						htmlFor=''
						className='text-[#2F3541] block'
					>
						About
						<span className='text-red-500'>*</span>
					</label>

					<textarea
						name=''
						id=''
						placeholder='Enter Your Text Here'
						className='w-full block h-[96px] border border-[#CCCCCC] pl-2 my-[2px] rounded bg-[#F5F6FB]'
					></textarea>
				</div>

				<div className='grid md:grid-cols-2 gap-5'>
					<div className='py-[20px]'>
						<label
							htmlFor=''
							className='text-[#2F3541] block'
						>
							Point of Contact{" "}
							<span className='text-red-500'>*</span>
						</label>

						<input
							type='text'
							className='w-full block h-[35px] border border-[#CCCCCC] pl-2 my-[2px] rounded'
						/>
					</div>
					<div className='py-[20px]'>
						<label
							htmlFor=''
							className='text-[#2F3541] block'
						>
							Designation <span className='text-red-500'>*</span>
						</label>

						<input
							type='text'
							className='w-full block h-[35px] border border-[#CCCCCC] pl-2 my-[2px] rounded'
						/>
					</div>
				</div>

				<div className='grid md:grid-cols-2 gap-5'>
					<div className='py-[20px]'>
						<label
							htmlFor=''
							className='text-[#2F3541] block'
						>
							Phone Number
							<span className='text-red-500'>*</span>
						</label>

						<div className='flex relative'>
							<div className='px-3 border-r absolute h-full flex items-center justify-center '>
								+91
							</div>
							<input
								type='text'
								className='w-full block h-[35px] border border-[#CCCCCC] pl-16 my-[2px] rounded'
								placeholder='999 999 999'
							/>
						</div>
					</div>
					<div className='py-[20px]'>
						<label
							htmlFor=''
							className='text-[#2F3541] block'
						>
							Email ID
							<span className='text-red-500'>*</span>
						</label>

						<input
							type='text'
							className='w-full block h-[35px] border border-[#CCCCCC] pl-2 my-[2px] rounded'
						/>
					</div>
				</div>
			</Container>

			<div className='my-[4vw] border-t-2 border[#EBEDF4] text-center'>
				<button className='bg-[#A5AFC3] text-white my-[2vw] py-[10px] px-[40px] rounded '>
					Submit
				</button>
			</div>
		</div>
	);
};

export default DetailsForm;