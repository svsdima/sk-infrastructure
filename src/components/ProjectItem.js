import React from 'react'

const ProjectItem = ({ project }) => {

    function ProjectComplete() {
        return (
            <div className="project_complete">
                <span>Завершен</span>
            </div>
        )
        
    }

    function ProjectNotComplete() {
        return (
            <div className="project_not-complete">
                <span>Не завершен</span>
            </div>
        )
    }

    function CheckProject() {
        const isCompleted = project.completed;

        if (isCompleted) {
            return <ProjectComplete/>
        }
        return <ProjectNotComplete/>
    }

    return (
        <div className="clients-projects_item" style={{ backgroundImage: `url(${project.background})`}}>
            <div className="clients-projects_item_wrapper">
                <CheckProject isCompleted={true}/>
                <div className="clients-projects_logo">
                    <img src={project.logo} alt={project.logo} />
                </div>
                <div className="clients-projects_text">
                    <span>{project.work}</span> по адресу: {project.address}
                </div>
                <div className="clients-projects_more">Подробнее</div>
            </div>
        </div>
    )
}

export default ProjectItem
