import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CursorGlow } from "@/components/CursorGlow";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <div className="preloader" aria-hidden="true">
        <div>
          <p className="preloader-mark">Bhaskar B C</p>
          <span className="preloader-bar" />
        </div>
      </div>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black"
      >
        Skip to content
      </a>
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
