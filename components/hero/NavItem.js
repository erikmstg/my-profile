const NavItem = ({ href, children, scheme }) => {
  const schemes = {
    light: "text-white text-opacity-60 hover:text-opacity-100",
    dark: "text-black",
  };

  const pickScheme = schemes[scheme];

  return (
    <li>
      <a
        href={href}
        className={`${pickScheme} text-lg font-semibold cursor-pointer transition`}
      >
        {children}
      </a>
    </li>
  );
};

export default NavItem;
