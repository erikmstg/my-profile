import Button from "../Button";

const HeroContent = () => {
  return (
    <div className="text-center xl:mt-40 lg:mt-20 md:mt-20">
      <h1 className="w-8/12 text-white font-semibold font-mono mx-auto leading-relaxed lg:w-8/12 lg:text-3xl sm:text-xl">
        Welcome to the jungle
      </h1>
      <p className="text-white text-opacity-60 mx-auto mt-6 leading-relaxed lg:text-lg xl:w-4/12 md:text-sm md:w-5/12">
        In here you guys can find out something about me
      </p>
      <Button href="#profile" pill variant="yellow" className="mt-12 md:mt-8">
        Load More
      </Button>
    </div>
  );
};

export default HeroContent;
