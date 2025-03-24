import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedProjects = [
      { id: "1", title: "Project 1", description: "Description 1", github: "#", image: "project1.png" },
      { id: "2", title: "Project 2", description: "Description 2", github: "#", image: "project2.png" },
      { id: "3", title: "Project 3", description: "Description 3", github: "#", image: "project3.png" },
    ];
    setProjects(storedProjects);
  }, []);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const updatedProjects = Array.from(projects);
    const [reorderedItem] = updatedProjects.splice(result.source.index, 1);
    updatedProjects.splice(result.destination.index, 0, reorderedItem);
    setProjects(updatedProjects);
  };

  return (
    <div>
      <h2>My Projects</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="projects">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {projects.map((project, index) => (
                <Draggable key={project.id} draggableId={project.id} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <ProjectCard {...project} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Projects;
