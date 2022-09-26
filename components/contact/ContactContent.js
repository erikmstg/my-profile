const ContactContent = ({ icon, label, value, className }) => {
  const addClassName = className && `${className}`;
  return (
    <div className={`flex items-start mt-6 ${addClassName}`}>
      <img src={icon} alt={label} className="w-8" />
      <div className="ml-4">
        <div className="text-sm font-semibold mb-1">{label}</div>
        <div className="text-lg font-semibold">{value}</div>
      </div>
    </div>
  );
};

export default ContactContent;
