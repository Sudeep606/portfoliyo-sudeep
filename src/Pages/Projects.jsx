import React from 'react';
import './project.css';
import { Link } from 'react-router-dom';
function Projects() {
  return (
    <>
      <h2 className="text-center mt-5">Projects</h2>
      <Link style={{textDecoration:"none",fontSize:"20px"}} to="/home"><i className="fa-solid fa-arrow-left"></i>Back to Home</Link>


       <div className="box mt-4">
        <h3>Media Player</h3>
        <h4>HTML:5, CSS, JavaScript, React, JSON, Node</h4>
        <p>It's a video library where you can store your favourite contents. It has the features of adding video, watch history and personal account as well. It's build using HTML, CSS ,Javascript, React and Node </p>
        <a href="https://vercel.com/sudeeps-projects-4aa2267e/media-player" target="_blank" rel="noopener noreferrer">Live Link</a>
        <a href="https://github.com/Sudeep606/media-player" target="_blank" rel="noopener noreferrer">Git Repo</a>
      </div>

       <div className="box mt-4">
        <h3>E-Cart</h3>
        <h4>HTML:5, CSS, JavaScript, React, JSON, Node</h4>
        <p>An all in one e-commerce website for your daily essential products where you can purchase cosmetics to kitchen items.
        its build with the help of jsonplaceholder for data.</p>
        <a href="https://e-cart-xi-eight.vercel.app/">Live Link</a>
        <a href="https://github.com/Sudeep606/E-CART" target="_blank" rel="noopener noreferrer">Git Repo</a>
      </div>
      {/* Microsoft clone */}
      <div className="box mt-4">
        <h3>Microsoft Website Clone</h3>
        <h4>HTML:5, CSS, JavaScript</h4>
        <p></p>At the initial stage of my learning as a way to check my skils, I cloned the Microsoft website using HTML ,CSS and JavaScript.
        <a href="https://microsoft-clone-nu.vercel.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
        <a href="https://github.com/Sudeep606/microsoft-clone?files=1" target="_blank" rel="noopener noreferrer">Git Repo</a>
      </div>

      {/* Ecart */}
     
      <div className="box mt-4">
        <h3>Counter-App</h3>
        <h4>HTML:5, CSS, JavaScript, React, JSON, Node</h4>
        <p>A counter app is a simple mobile application or software program designed to keep track of a number through incrementing (adding) or decrementing (subtracting) a value.</p>
        <a href="https://counter-app-seven-theta.vercel.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
        <a href="https://github.com/Sudeep606/counter-app" target="_blank" rel="noopener noreferrer">Git Repo</a>
      </div>
      <div className="box mt-4">
        <h3>Basic Calculator</h3>
        <h4>HTML:5, CSS, JavaScript</h4>
        <p></p>
        <a href="https://basic-calculator-lac.vercel.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
        <a href="https://github.com/Sudeep606/basic-calculator" target="_blank" rel="noopener noreferrer">Git Repo</a>
      </div><div className="box mt-4">
        <h3>Color Palette</h3>
        <h4>HTML:5, CSS, JavaScript,React</h4>
        <p></p>
        <a href="https://color-palette-smoky-three.vercel.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
        <a href="https://github.com/Sudeep606/color-palette" target="_blank" rel="noopener noreferrer">Git Repo</a>
      </div>
    </>
  );
}

export default Projects;
