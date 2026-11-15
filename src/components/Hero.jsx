import heroImg from "../assets/hero.png";
import profileImg from "../assets/profile.jpeg";

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <p className="hero-greeting">Hello, I'm</p>
        <h1>Alva Obiero</h1>
        <h2>Frontend Developer</h2>
        <p className="hero-desc]">
          I build clean, responsive websites and web apps with React,
          JavaScript, HTML and CSS to enhace my skills as a student in Moringa school
        </p>

        <div className="hero-buttons">
          <p className="btn-primary">   View the latest progress </p>
          
        </div>
      </div>

      <div className="hero-image">
        <img src={profileImg} alt="Portrait" />
      </div>
      
    </section>
  );
};

export default Hero;