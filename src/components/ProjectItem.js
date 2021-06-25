import React from 'react'

const ProjectItem = ({ project }) => {
    return (
        <div className="clients-projects_item" style={{ backgroundImage: `url(${project.background})` }}>
            <div className="clients-projects_item_wrapper">
                <div className="clients-projects_logo">
                    <img src={project.logo} alt={project.logo} />
                </div>
                <div className="clients-projects_text">
                    <span>{project.work}</span> по адресу: {project.address}
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
