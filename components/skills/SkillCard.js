const SkillCard = ({ name, image, imageClassName }) => {
  return (
    <div className="flex bg-white shadow-skill rounded-xl p-6 items-center -m-1">
      <img
        src={image}
        alt={name}
        className={`${imageClassName} mr-6 w-16 h-16`}
      />
      <div className="my-auto -mx-1">
        <h4 className="text-lg font-semibold">{name}</h4>
      </div>
    </div>
  );
};

export default SkillCard;
