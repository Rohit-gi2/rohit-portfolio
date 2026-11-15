import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="site-shell flex min-h-screen flex-col">
    <Navbar />
    <div className="site-content container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <AchievementsSection />
      <AboutSection />
      <ProjectsSection />
      <EmailSection />
    </div>
    <Footer />
  </main>
  );
}
