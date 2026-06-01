import AboutHero from "../../components/about/AboutHero/AboutHero";
import OurStory from "../../components/about/OurStory/OurStory";
import CompanyStats from "../../components/about/CompanyStats/CompanyStats";
import MissionVision from "../../components/about/MissionVision/MissionVision";
import AboutProducts from "../../components/about/AboutProducts/AboutProducts";
import WhyChooseSpay from "../../components/about/WhyChooseSpay/WhyChooseSpay";

import ConnectorsCTA from "../../components/connectors/ConnectorsCTA/ConnectorsCTA";

const About = () => {
  return (
    <>
      <AboutHero />
      <OurStory />
            <CompanyStats />
                    <MissionVision />
                     <AboutProducts />
            <WhyChooseSpay />
    </>
  );
};

export default About;