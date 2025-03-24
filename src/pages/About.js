import React from "react";

const About = ({ profilePic, skills = "", bio }) => {
  const skillsArray = skills ? skills.split(",") : []; // Ensure skills is never undefined

  return (
    <div className="about">
      {profilePic && <img src={profilePic} alt="Profile" width="150" />}
      <h3>About Me</h3>
      <p>{bio}</p>
      <h4>Skills:</h4>
      <ul>
        {skillsArray.map((skill, index) => (
          <li key={index}>{skill.trim()}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
