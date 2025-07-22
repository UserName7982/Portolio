import { Briefcase, Code, User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Software developer & Tech Creator
            </h3>
            <p className="text-muted-foreground">
              I'm a passionate Software Developer currently pursuing a
              Bachelor's degree in Computer Science at Dr. Akhilesh Das Gupta
              Institute of Professional Studies (GGSIPU).
              <br />
              <br />
              I specialize in both front-end and back-end development, with
              hands-on experience building full-stack applications using
              technologies like Java, JavaScript, React.js, and various
              frameworks. I enjoy solving real-world problems through clean,
              efficient code and user-friendly design.
              <br />
              <br />
              I’m particularly interested in web development, system design, and
              scalable solutions. I’m currently exploring cloud technologies and
              improving my data structures & algorithms.
              <br />
              Outside of coding, I enjoy reading tech blogs, playing chess, and
              exploring new productivity tools. I’m always curious, always
              learning, and always open to new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in touch
              </a>
              <a
                href="/Resume.pdf" download
                className="px-3 py-2 bg-transparent border border-primary rounded-full text-primary font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="gird grid-cols-1 space-y-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className=" text-left">
                  <h4 className="font-semibold text-lg">Software development</h4>
                  <p className="text-muted-foreground">
                    creating the Resposive WebSites and App
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className=" text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Desiging the Resposive user interface and user experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className=" text-left">
                  <h4 className="font-semibold text-lg">Web development</h4>
                  <p className="text-muted-foreground">
                    creating the Resposive WebSite
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
