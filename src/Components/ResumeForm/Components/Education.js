import React from "react";
import './Components.css';

function Education({ formData, handleChange, addNewEntry }) {
    return (
        <div className="education-details-container">
            <h2>Education</h2>
            {formData.map((entry, index) => (
                <div key={index} className="education-entry">
                    <div className="form-group">
                        <label>
                            Institution:
                            <input
                                type="text"
                                name="name"
                                value={entry.name}
                                onChange={(e) => handleChange('education', entry.id, 'name', e.target.value)}
                                className="input-field"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Course:
                            <input
                                type="text"
                                name="course"
                                value={entry.course}
                                onChange={(e) => handleChange('education', entry.id, 'course', e.target.value)}
                                className="input-field"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            GPA:
                            <input
                                type="text"
                                name="gpa"
                                value={entry.gpa}
                                onChange={(e) => handleChange('education', entry.id, 'gpa', e.target.value)}
                                className="input-field"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Start Date ( Month - Year):
                            <input
                                type="date"
                                name="start"
                                value={entry.start}
                                onChange={(e) => handleChange('education', entry.id, 'start', e.target.value)}
                                className="input-field"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            End Date ( Month - Year):
                            <input
                                type="date"
                                name="end"
                                value={entry.end}
                                onChange={(e) => handleChange('education', entry.id, 'end', e.target.value)}
                                className="input-field"
                            />
                        </label>
                    </div>
                </div>
            ))}
            <button type="button" onClick={() => addNewEntry('education')} className="add-button">Add Another Education</button>
        </div>
    );
}

export default Education;
