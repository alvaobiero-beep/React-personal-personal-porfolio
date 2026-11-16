const Navbar = ({name, about,skills,projects,contacts}) => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">{name}</a></li>
        <li><a href="#about">{about}</a></li>
        <li><a href="#skills">{skills}</a></li>
        <li><a href="#projects">{ projects}</a></li>
        <li><a href="#contact">{contacts}</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;