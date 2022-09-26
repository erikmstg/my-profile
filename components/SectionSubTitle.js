const SectionSubTitle = ({ left, children }) => {
  return (
    <p className={`text-lg mt-2 text-gray-400 ${!left && "text-center"}`}>
      {children}
    </p>
  );
};

export default SectionSubTitle;
