import React from "react";
import './Components.css';

function Projects({ formData, handleChange, addNewEntry }) {
    return (
        <div className="projects-details-container">
            <h2>Projects</h2>
            {formData.map((entry, index) => (
                <div key={index} className="project-entry">
                    <div className="form-group">
                        <label>
                            Project Name:
                            <input
                                type="text"
                                name="name"
                                value={entry.name}
                                onChange={(e) => handleChange('projects', entry.id, 'name', e.target.value)}
                                className="input-field"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Technologies Used:
                            <input
                                type="text"
                                name="stacks"
                                value={entry.stacks}
                                onChange={(e) => handleChange('projects', entry.id, 'stacks', e.target.value)}
                                className="input-field"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Description:
                            <textarea
                                name="desc"
                                value={entry.desc}
                                onChange={(e) => handleChange('projects', entry.id, 'desc', e.target.value)}
                                className="textarea-field"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Link:
                            <input
                                type="text"
                                name="link"
                                value={entry.link}
                                onChange={(e) => handleChange('projects', entry.id, 'link', e.target.value)}
                                className="input-field"
                            />
                        </label>
                    </div>
                </div>
            ))}
            <button type="button" onClick={() => addNewEntry('projects')} className="add-button">Add Another Project</button>
        </div>
    );
}

export default Projects;