import React from "react";
import './Components.css';


function Experience({ formData, handleChange, addNewEntry }) {
    return (
        <div className="experience-details-container">
            <h2>Experience</h2>
            {formData.map((entry, index) => (
                <div key={index} className="experience-entry">
                    <div className="form-group">
                        <label>
                            Position:
                            <input
                                type="text"
                                name="position"
                                value={entry.position}
                                onChange={(e) => handleChange('experience', entry.id, 'position', e.target.value)}
                                className="input-field"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Company:
                            <input
                                type="text"
                                name="company"
                                value={entry.company}
                                onChange={(e) => handleChange('experience', entry.id, 'company', e.target.value)}
                                className="input-field"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Skills Used ( Separate by Space):
                            <input
                                type="text"
                                name="skills_used"
                                value={entry.skills_used}
                                onChange={(e) => handleChange('experience', entry.id, 'skills_used', e.target.value)}
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
                                onChange={(e) => handleChange('experience', entry.id, 'desc', e.target.value)}
                                className="textarea-field"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Start Date (Month - Year):
                            <input
                                type="date"
                                name="start"
                                value={entry.start}
                                onChange={(e) => handleChange('experience', entry.id, 'start', e.target.value)}
                                className="input-field"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            End Date (Month - Year):
                            <input
                                type="date"
                                name="end"
                                value={entry.end}
                                onChange={(e) => handleChange('experience', entry.id, 'end', e.target.value)}
                                className="input-field"
                            />
                        </label>
                    </div>
                </div>
            ))}
            <button type="button" onClick={() => addNewEntry('experience')} className="add-button">Add Another Experience</button>
        </div>
    );
}

export default Experience;
