import React from "react";
import './Components.css';


function ExtraCurriculurs({ formData, handleChange, addNewEntry }) {
    return (
        <div className="extracurriculur-details-container">
            <h2>Extracurriculars</h2>
            {formData.map((entry, index) => (
                <div key={index} className="extracurriculur-entry">
                    <div className="form-group">
                        <label>
                            Club Name:
                            <input
                                type="text"
                                name="club_name"
                                value={entry.club_name}
                                onChange={(e) => handleChange('extracurriculars', entry.id, 'club_name', e.target.value)}
                                className="input-field"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Position:
                            <input
                                type="text"
                                name="position"
                                value={entry.position}
                                onChange={(e) => handleChange('extracurriculars', entry.id, 'position', e.target.value)}
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
                                onChange={(e) => handleChange('extracurriculars', entry.id, 'skills_used', e.target.value)}
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
                                onChange={(e) => handleChange('extracurriculars', entry.id, 'desc', e.target.value)}
                                className="textarea-field"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Start Date:
                            <input
                                type="date"
                                name="start"
                                value={entry.start}
                                onChange={(e) => handleChange('extracurriculars', entry.id, 'start', e.target.value)}
                                className="input-field"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            End Date:
                            <input
                                type="date"
                                name="end"
                                value={entry.end}
                                onChange={(e) => handleChange('extracurriculars', entry.id, 'end', e.target.value)}
                                className="input-field"
                            />
                        </label>
                    </div>
                </div>
            ))}
            <button type="button" onClick={() => addNewEntry('extracurriculars')} className="add-button">Add Another Activity</button>
        </div>
    );
}

export default ExtraCurriculurs;
