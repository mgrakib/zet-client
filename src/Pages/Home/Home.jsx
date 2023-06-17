import { Outlet } from "react-router-dom";
import HeroSection from "../../Components/HeroSection/HeroSection";
import TopBrands from "../../Components/TopBrands/TopBrands";
import ProductsOnZET from "../../Components/ProductsOnZET/ProductsOnZET";
import Feature from "../../Components/Feature/Feature";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import StartEarning from "../../Components/StartEarning/StartEarning";

const Home = () => {
    return (
        <div>
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