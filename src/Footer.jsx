import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
             
Cineflix is a movie website offering an immersive experience for film enthusiasts. Built with modern web technologies, it provides an intuitive platform to explore a vast collection of movies, from classics to the latest releases, making discovery and enjoyment seamless.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/trending" className="text-white text-decoration-none">
                  Trending
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: biplovdhakal@gmail.com</p>
            <p>Address: Kathmandu, Nepal</p>
          </div>
        </div>
        <div className="mt-3">
          <p>&copy; 2025 CineFlix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
