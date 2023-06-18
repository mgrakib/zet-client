import { Helmet } from "react-helmet-async";
import GotFeatured from "../../Components/GotFeatured/GotFeatured";
import HowWeEvolved from "../../Components/HowWeEvolved/HowWeEvolved";
import MeetInvestors from "../../Components/MeetInvestors/MeetInvestors";
import MeetOurFounders from "../../Components/MeetOurFounders/MeetOurFounders";
import OurMission from "../../Components/OurMission/OurMission";

const About = () => {
    return (
		<div>
			<Helmet>
				<title>
					ZET : About Us
				</title>
			</Helmet>
			<OurMission />
			<HowWeEvolved />
			<GotFeatured />
			<MeetInvestors />
			<MeetOurFounders />
		</div>
	);
};

export default About;