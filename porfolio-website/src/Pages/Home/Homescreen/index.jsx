import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyPortolio from "../MyPorfolio";
import Testimonial from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";


export default function Home() {
    return (
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortolio />
            <Testimonial />
            <ContactMe />
            <Footer />
        </>
    )
}