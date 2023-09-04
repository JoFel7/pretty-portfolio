import { useState } from "react";
import NavTabs from "./NavTabs";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  // This state variable 'currentPage' keeps track of the currently selected page.
  const [currentPage, setCurrentPage] = useState("Portfolio");

  // This function 'renderPage' is responsible for rendering the content of the selected page.
  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "About") {
      return <AboutMe />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    // If 'currentPage' is not 'Portfolio', 'About', or 'Resume', it defaults to rendering the 'Contact' page.
    return <Contact />;
  };

  // This function 'handlePageChange' is used to update the 'currentPage' state when a navigation tab is clicked.
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing 'currentPage' and 'handlePageChange' as props to the 'NavTabs' component.
        'currentPage' informs the component about the currently selected page,
        and 'handlePageChange' provides a way for the component to update the 'currentPage' state. */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      {/* Inside the 'main' element, the 'renderPage' function is called to display the content
         of the currently selected page based on the 'currentPage' state. */}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}
