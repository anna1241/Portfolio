import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DataEntry.css";

const DataEntry = ({ setPortfolioData }) => {
  const navigate = useNavigate();

  // Main state for storing user input
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    profilePicture: null,
    skills: "",
    interests: "",
    description: "",
    projects: [],
    socialLinks: [],
  });

  // State for temporary new project
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    image: null,
    github: "",
  });

  // State for temporary new social media entry
  const [newSocial, setNewSocial] = useState({ name: "", url: "" });

  // Handle text input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file uploads
  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === "profile") {
        setFormData((prev) => ({ ...prev, profilePicture: file }));
      } else {
        setNewProject((prev) => ({ ...prev, image: file }));
      }
    }
  };

  // Add a new project entry
  const addProject = () => {
    if (!newProject.title || !newProject.description) return alert("Please enter project details");
    
    setFormData((prev) => ({
      ...prev,
      projects: [...prev.projects, { ...newProject }],
    }));

    // Reset new project form
    setNewProject({ title: "", description: "", image: null, github: "" });
  };

  // Add a new social media entry
  const addSocialMedia = () => {
    if (!newSocial.name || !newSocial.url) return alert("Please enter social media details");

    setFormData((prev) => ({
      ...prev,
      socialLinks: [...prev.socialLinks, { ...newSocial }],
    }));

    // Reset new social media form
    setNewSocial({ name: "", url: "" });
  };

  // Submit form and navigate
  const handleSubmit = () => {
    setPortfolioData(formData);
    navigate("/home");
  };

  return (
    <div className="data-entry">
      <h1>Portfolio Data Entry</h1>

      <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
      <textarea name="bio" placeholder="Short Bio" value={formData.bio} onChange={handleChange} />

      <label>Upload Profile Picture</label>
      <input type="file" onChange={(e) => handleFileUpload(e, "profile")} />

      <input type="text" name="skills" placeholder="Skills (comma separated)" value={formData.skills} onChange={handleChange} />
      <input type="text" name="interests" placeholder="Interests" value={formData.interests} onChange={handleChange} />
      <textarea name="description" placeholder="About Me" value={formData.description} onChange={handleChange} />

      {/* Projects Section */}
      <h3>Add Projects</h3>
      <input type="text" placeholder="Project Title" value={newProject.title} onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} />
      <textarea placeholder="Project Description" value={newProject.description} onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} />
      <label>Upload Project Image</label>
      <input type="file" onChange={(e) => handleFileUpload(e, "project")} />
      <input type="text" placeholder="GitHub Link" value={newProject.github} onChange={(e) => setNewProject({ ...newProject, github: e.target.value })} />
      <button onClick={addProject} style={{ backgroundColor: "blue", color: "white" }}>Add Project</button>

      {/* Display Added Projects */}
      {formData.projects.length > 0 && (
        <div>
          <h4>Added Projects:</h4>
          {formData.projects.map((proj, index) => (
            <p key={index}>{proj.title} - {proj.github}</p>
          ))}
        </div>
      )}

      {/* Social Media Section */}
      <h3>Add Social Media</h3>
      <input type="text" placeholder="Platform (e.g., LinkedIn)" value={newSocial.name} onChange={(e) => setNewSocial({ ...newSocial, name: e.target.value })} />
      <input type="text" placeholder="Profile URL" value={newSocial.url} onChange={(e) => setNewSocial({ ...newSocial, url: e.target.value })} />
      <button onClick={addSocialMedia} style={{ backgroundColor: "blue", color: "white" }}>Add Social Media</button>

      {/* Display Added Social Media */}
      {formData.socialLinks.length > 0 && (
        <div>
          <h4>Added Social Media:</h4>
          {formData.socialLinks.map((social, index) => (
            <p key={index}>{social.name} - {social.url}</p>
          ))}
        </div>
      )}

      {/* Submit Button */}
      <button className="submit-btn" onClick={handleSubmit} style={{ backgroundColor: "green", color: "white" }}>
        Submit & Generate Portfolio
      </button>
    </div>
  );
};

export default DataEntry;
