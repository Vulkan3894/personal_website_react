import React from 'react';
import './App.css'; // Import your CSS file
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <ProfileCard />
        </div>
        <div className="col-md-9">
          <AboutMeCard />
          <SocialLinks />
        </div>
      </div>
      {/* Additional rows and cards can be added here */}
    </div>
  );
}

export default App;

function ProfileCard() {
  return (
    <div className="card card-body" id="profile-wrapper">
      <img id="profile-pic" src="/images/pedro.jpg" width={150} alt="Profile Pic" />
      <hr />
      <h4>Pedro Leon</h4>
      <p>Junior Software Developer in the learning path</p>
    </div>
  );
}


function AboutMeCard() {
  return (
    <div className="card card-body">
      <h4>About Me!</h4>
      <hr />
      <p>
        I am currently building my first big project. I currently work at the CISE IT Department in the University of Florida. Currently looking to increase my knowledge at the fastest possible pace with careful attention to learning.
      </p>
    </div>
  );
}

function SocialLinks() {
  return (
    <ul className="social-links">
      <li><img className="social" src="/images/linkedin.png" alt="LinkedIn" /></li>
      <li><img className="social" src="/images/facebook.png" alt="Facebook" /></li>
      <li><img className="social" src="/images/github.png" alt="GitHub" /></li>
    </ul>
  );
}



