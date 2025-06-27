import "../Style/About.css";
const About = () => {
  return (
    <div className="about">
      <div className="mt-20 px-6">
        <h1 className="text-5xl text-gray-200">ABOUT ME</h1>
        <p className="about_sub text-gray-200 text-2xl w-[60%] tracking-widest leading-[1.5] mt-4">
          Hi, I'm Akash Kumar, a passionate and dedicated Front-End Developer
          with expertise in HTML, CSS, JavaScript, and React JS. I enjoy
          building responsive and user-friendly websites and web applications. I
          have 3 months of internship experience in Web Designing, where I
          worked on real-world projects and improved my skills in creating
          clean, responsive, and visually appealing website layouts.
        </p>
      </div>
      <div className="mt-12">
        <div className="flex items-center">
          <h1 className="text-3xl px-6  text-gray-200">Tech Stack I Use</h1>
          <div className="h-[1px] mx-10 bg-gray-200 w-[70%]"></div>
        </div>
        <div className="grid grid-cols-5 gap-20 px-6 my-12">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="html_img"
            className="w-16"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
            alt="css_img"
            className="w-16"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="js_img"
            className="w-16"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react js_img"
            className="w-16"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="redux_img"
            className="w-16"
          />
          <img
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            alt="tailwind css_img"
            className="w-16"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
            alt="bootstrap_img"
            className="w-16"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            alt="next js_img"
            className="w-16"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            alt="figma_img"
            className="w-16"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
            alt="git_img"
            className="w-16"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
