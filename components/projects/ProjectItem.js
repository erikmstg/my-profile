const ProjectItem = ({ title, subTitle, image }) => {
  return (
    <article className="text-center">
      <img src={image} alt={title} className="w-full rounded-lg" />
      <h3 className="text-xl font-semibold mt-4 mb-1">{title}</h3>
      <p className="text-lg text-gray-400">{subTitle}</p>
    </article>
  );
};

export default ProjectItem;
