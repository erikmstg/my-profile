import NavItem from "./NavItem";

const Nav = ({ dir, className, scheme }) => {
  const dirs = {
    horizontal: "justify-center space-x-10",
    vertical: "flex-col space-y-6",
  };

  const pickDir = dirs[dir];

  return (
    <ul className={`flex ${pickDir} ${className}`}>
      <NavItem scheme={scheme} href="#profile">
        Profile
      </NavItem>
      <NavItem scheme={scheme} href="#skills">
        Skills
      </NavItem>
      <NavItem scheme={scheme} href="#projects">
        Projects
      </NavItem>
      <NavItem scheme={scheme} href="#contact">
        Contact
      </NavItem>
    </ul>
  );
};

export default Nav;
