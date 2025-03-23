import React from "react";
import { Link } from "react-router-dom";

const projects = [
  { id: "1", title: "Project One", description: "Description for Project One" },
  { id: "2", title: "Project Two", description: "Description for Project Two" },
  { id: "3", title: "Project Three", description: "Description for Project Three" }
];

const Projects = () => (
  <div>
    <h2>Projects</h2>
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          {project.title} - <Link to={`/projects/${project.id}`}>View Details</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Projects;