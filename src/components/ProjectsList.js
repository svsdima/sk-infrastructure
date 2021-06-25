import React from 'react'
import projects from '../projects';
import ProjectItem from './ProjectItem';

const ProjectsList = () => {
    const projectsPreview = projects.slice(0, 6);
    return (
        <div className="clients-projects">
            <div className="container">
                <div className="clients-projects_wrapper">
                    <div className="clients-projects_up">
                        <h2 className="title">Наши клиенты и проекты</h2>
                        <button className="btn btn-projects">Все проекты</button>
                    </div>
                    <div className="clients-projects_list">
                        {projectsPreview.map(project => (
                            <div key={project._id} className="clients-projects_item" style={{ backgroundImage: `url(${project.background})` }}>
                                <ProjectItem project={project}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsList
