import { Outlet } from "react-router-dom";
import HeroSection from "../../Components/HeroSection/HeroSection";
import TopBrands from "../../Components/TopBrands/TopBrands";
import ProductsOnZET from "../../Components/ProductsOnZET/ProductsOnZET";
import Feature from "../../Components/Feature/Feature";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import StartEarning from "../../Components/StartEarning/StartEarning";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
		<div>
			<Helmet>
				<title>
					ZET : Become a Certified Financial Advisor and Earn Big
				</title>
			</Helmet>
			<HeroSection />
			<TopBrands />
			<ProductsOnZET />
			<Feature />
			<WhyChooseUs />
			<StartEarning />
		</div>
	);
};

export default Home;