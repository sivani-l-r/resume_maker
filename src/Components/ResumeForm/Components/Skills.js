import React from "react";
import './Components.css';


function Skills({ formData, handleChange, addNewEntry }) {
    return (
        <div className="skills-details-container">
            <h2>Skills</h2>
            {formData.map((entry, index) => (
                <div key={index} className="skills-entry">
                    <div className="form-group">
                        <label>
                            Category:
                            <input
                                type="text"
                                name="category"
                                value={entry.category}
                                onChange={(e) => handleChange('skills', entry.id, 'category', e.target.value)}
                                className="input-field"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Skills ( Separate with comma) :
                            <input
                                type="text"
                                name="skills"
                                value={entry.skills}
                                onChange={(e) => handleChange('skills', entry.id, 'skills', e.target.value)}
                                className="input-field"
                            />
                        </label>
                    </div>
                </div>
            ))}
            <button type="button" onClick={() => addNewEntry('skills')} className="add-button">Add Another Category</button>
        </div>
    );
}

export default Skills;
