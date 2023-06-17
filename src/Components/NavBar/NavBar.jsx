import Container from "../Container/Container";
import logo from '../../assets/zet_new_logosvg.svg'
import './NavBar.css'
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const NavBar = () => {
    return (
		<div className='py-[8px] border-b border-[#D1D8E1]'>
			<Container>
				<div className='flex items-center  h-[64px]'>
					<div className=' cursor-pointer'>
						<img
							src={logo}
							alt=''
							className=' w-[90px]'
						/>
					</div>

					<div className="ml-auto">
						<FaBars />
					</div>
					<nav className='ml-auto hidden'>
						<ul className='flex items-center'>
							<NavLink
								className={({ isActive }) =>
									isActive ? "active" : "default"
								}
							>
								<li>Home</li>
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? "active" : "default"
								}
							>
								<li>About Us</li>
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? "active" : "default"
								}
							>
								<li>Partner With Us</li>
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? "active" : "default"
								}
							>
								<li>Blog</li>
							</NavLink>

							<li>
								<button className='h-[34px] w-[125px] rounded-md bg-primary-color text-white-color'>
									Download ZET
								</button>
							</li>
						</ul>
					</nav>
				</div>
			</Container>
		</div>
	);
};

export default NavBar;