const Button = ({ href, className, variant, children, pill, target }) => {
  const variants = {
    "outline-yellow":
      "border border-yellow-500, text-yellow-500 hover:text-black hover:bg-yellow-500",
    yellow: "bg-yellow-500 text-black hover:bg-yellow-600",
    black: "bg-black text-white hover:opacity-90",
    white:
      "border border-black bg-gray-background text-black hover:bg-neutral-200",
  };
  const pickVariant = variants[variant];
  return (
    <a
      href={href}
      target={target}
      className={`transition px-10 py-3 font-semibold text-lg inline-block cursor-pointer ${
        pill && `rounded-full`
      } ${pickVariant} ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
