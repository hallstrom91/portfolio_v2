import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "@shared/Navbar";
import Hero from "@pages/Hero";
import Skills from "@pages/Skills";
import Contact from "@pages/Contact";
import Showcase from "@pages/Showcase";
import ProfileCard from "@cards/ProfileCard";
import NotFound from "@utils/NotFound";

export default function AnimatedRoutes() {
  const [activePage, setActivePage] = useState("Hero");

  const renderPage = () => {
    switch (activePage) {
      case "Hero":
        return <Hero />;
      case "Skills":
        return <Skills />;
      case "Showcase":
        return <Showcase />;
      case "Contact":
        return <Contact />;
      default:
        return <NotFound />;
    }
  };

  return (
    <>
      <Navbar setActivePage={setActivePage} />
      <div className="w-full flex flex-col md:flex-row md:my-10 md:px-10 min-h-screen">
        <div
          id="profile-card"
          className="w-full mt-12 flex justify-center md:w-5/12 md:justify-start"
        >
          <ProfileCard setActivePage={setActivePage} />
        </div>
        <div className="w-full mt-12">
          <TransitionGroup>
            <CSSTransition key={activePage} classNames="fade" timeout={1000}>
              <div id="page-content">{renderPage()}</div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </>
  );
}
