function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <a class="navbar-brand nav-item">Josue Feliciano</a>
      <li className="nav-item">
        <a
          href="#aboutme"
          onClick={() => handlePageChange('AboutMe')}
          // This code checks if the current page is 'AboutMe'.
          // If it is, it assigns the 'active' class to make the tab look active.
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // This code checks if the current page is 'Portfolio'.
          // If it is, it assigns the 'active' class to make the tab look active.
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          // This code checks if the current page is 'Contact'.
          // If it is, it assigns the 'active' class to make the tab look active.
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
           // This code checks if the current page is 'Resume'.
          // If it is, it assigns the 'active' class to make the tab look active.
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
