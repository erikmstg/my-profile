import HeroContent from "./hero/HeroContent";
import Navbar from "./hero/Navbar";

const Hero = () => {
  return (
    <div className="bg-hero 2xl:h-[712px] xl:h-[600px] lg:h-[550px] md:h-[500px] pb-20">
      <div className="container mx-auto px-6 2xl:px-2 xl:px-16 lg:px-14 md:px-2">
        <Navbar />
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
