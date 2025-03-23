import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const projects = [
  { id: "1", title: "maxi", description: " Project One" },
  { id: "2", title: "wehealth", description: " Project Two" },
  { id: "3", title: "looks", description: "  Project Three" }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) return <h2>Project Not Found</h2>;

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <button onClick={() => navigate("/projects")}>Back to Projects</button>
    </div>
  );
};

export default ProjectDetail;