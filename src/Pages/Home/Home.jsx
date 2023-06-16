import { Outlet } from "react-router-dom";
import HeroSection from "../../Components/HeroSection/HeroSection";
import TopBrands from "../../Components/TopBrands/TopBrands";
import ProductsOnZET from "../../Components/ProductsOnZET/ProductsOnZET";

const Home = () => {
    return (
        <div>
            <HeroSection />   
            <TopBrands />
            <ProductsOnZET/>
        </div>
    );
};

export default Home;