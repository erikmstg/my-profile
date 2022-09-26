const Field = ({ name, label, type, className }) => {
  const addClassName = className && `${className}`;
  const fieldClassName = `bg-transparent border border-gray-field px-4 py-2 w-full ${addClassName}`;
  return (
    <div className="mb-6">
      <label htmlFor={name} className="font-semibold text-sm block mb-1">
        {label}
      </label>
      {type === "text" && (
        <input
          type="text"
          name={name}
          id={name}
          placeholder={label}
          className={fieldClassName}
        />
      )}
      {type === "textarea" && (
        <textarea
          name={name}
          id={name}
          placeholder={label}
          className={fieldClassName}
        />
      )}
    </div>
  );
};

export default Field;
