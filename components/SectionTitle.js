const SectionTitle = ({ left, children }) => {
  return (
    <h2
      className={`text-2xl ${!left && "text-center"} font-mono font-semibold`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
