import React from 'react'
import { Link } from 'react-router-dom';
import projects from '../projects';
import Footer from './Footer';
import ProjectItem from './ProjectItem';

const Projects = () => {
    return (
        <>
            <div className="projects">
                <div className="container">
                    <div className="projects_wrapper">
                        <div className="projects_up">
                            <div className="links">
                                <Link  to="/">Главная</Link>/<span>Проекты</span>
                            </div>
                            <h2 className="title">Проекты</h2>
                        </div>
                        <div className="clients-projects_list">
                            {projects.map(project => (
                                <div key={project._id} className="clients-projects_item" style={{ backgroundImage: `url(${project.background})` }}>
                                    <ProjectItem project={project}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Projects
