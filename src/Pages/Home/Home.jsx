import { Outlet } from "react-router-dom";
import HeroSection from "../../Components/HeroSection/HeroSection";
import TopBrands from "../../Components/TopBrands/TopBrands";

const Home = () => {
    return (
        <div>
            <HeroSection />   
            <TopBrands />
        </div>
    );
};

export default Home;