import Image from "next/image";
import Button from "../Button";

const ProjectItem = ({ title, subTitle, image, link }) => {
  return (
    <article className="text-center">
      <Image
        src={image}
        alt={title}
        className="w-full rounded-lg"
        width="768"
        height="499"
      />
      <h3 className="text-xl font-semibold mt-4 mb-1">{title}</h3>
      <p className="text-lg text-gray-600">{subTitle}</p>
      <Button
        variant="white"
        href={link}
        className="mt-4"
        target="_blank"
        rel="noopenener noreferrer"
      >
        Github
      </Button>
    </article>
  );
};

export default ProjectItem;
