import { ArrowDown, ExternalLink, Github, Linkedin } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Weather App",
    description: " Developed using Android Studio, this app provides real-time weather information for the current location and a 7-day weather forecast.• Features: Real-time Weather Information for the current location & 7-Day Weather Forecast with daily."
    ,
    image:
      "/mobile.jpg",
    tags: ["Java", "Android Studio","Html","MySql","vs code","Git/GitHub"],
    link: "https://github.com/UserName7982/Weather-App",
  },
  {
    id: 2,
    title: "Flappy Bird",
    description: "Developed a 2D arcade-style game using Java and Swing, replicating the popular Flappy Bird gameplay.• Features: Dynamic game logic, user input handling, collision detection, and a visually appealing interface.",
    image:
      "/flappy_bird.jpg",
    tags: ["java","vs code","Git/GitHub"],
    link: "https://github.com/UserName7982/FlappyBird",
  },
  {
    id: 3,
    title: "SCM",
    description: "Built a full-stack web application using Spring Boot to simplify contact organization and management. Implemented user authentication and authorization with Spring Security to ensure secure access",
    image:
      "/SCM.png",
    tags: ["Java", "TailWind Css", "JavaScript","Flowbite","MySql","vs code","Git/GitHub","Spring Boot","Spring Security"],
    link: "https://github.com/UserName7982/scm",
  },
   {
    id: 3,
    title: "PortFolio",
    description: "Designed and developed a responsive, modern portfolio website to showcase personal projects and skills. Utilized React, Tailwind CSS, and JavaScript to create a dynamic and engaging user experience.  ",
    image:
      "portfolio.png",
    tags: ["React", "TailWind Css", "JavaScript","Html/Css","vs code","Git/GitHub"],
    link: "https://github.com/UserName7982/Portolio",
  },
];
export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative px-4">
      <div className="container mx-auto mx-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured
          <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are a few projects I've worked on recently, please take a look at
          my portfolio to see more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110   "
                />
              </div>
              <div className="p-6">
                <div className=" flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span className="bg-secondary text-primary rounded-full px-1 py-0 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title} </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="space-x-3 flex">
                    <a
                      href={project.link} target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink />
                    </a>
                    <a
                      href={project.link} target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            target="_blank"
            href="https://github.com/UserName7982"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            {" "}
            Check Out My GitHub <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};
