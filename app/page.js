import Footer from "./Components/Footer";
import HireMe from "./Components/HireMe";
import Projects from "./Components/Projects";
import MainPage from "./(Pages)/MainSection/HomePage";

export default function Home() {
  return (
    <>
      <MainPage />
      <Projects />
      <HireMe />
      <Footer />
    </>
  );
}
