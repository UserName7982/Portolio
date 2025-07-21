import { About } from "../components/About";
import { BackGround } from "../components/BackGround";
import { Contact } from "../components/Contact";
import { HeroSection } from "../components/HeroSection";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import ThemeToggle from "../components/ThemeToggle";
import { NavBar } from "./NavBar";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />

      {/* BackGround Effect */}
      <BackGround />

      {/* NavBar */}
      <NavBar />

      {/* Hero Section */}

      <main>
        <HeroSection />

        {/* about */}
        <About />
        
        {/* Skilled */}
        <Skills />
        {/* Projects */}
        <Projects />
        {/* Contact */}
        <Contact />
      </main>
    </div>
  );
}
export default Home;
