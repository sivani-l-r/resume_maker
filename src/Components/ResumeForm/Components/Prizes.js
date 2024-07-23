import React from "react";
import './Components.css';


function Prizes({ formData, handleChange, addNewEntry }) {
    return (
        <div className="prizes-details-container">
            <h2>Prizes</h2>
            {formData.map((entry, index) => (
                <div key={index} className="prizes-entry">
                    <div className="form-group">
                        <label>
                            Prize Name:
                            <input
                                type="text"
                                name="name"
                                value={entry.name}
                                onChange={(e) => handleChange('prizes', entry.id, 'name', e.target.value)}
                                className="input-field"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Awarding Organization
                            <input
                                type="text"
                                name="awarding_org"
                                value={entry.awarding_org}
                                onChange={(e) => handleChange('prizes', entry.id, 'awarding_org', e.target.value)}
                                className="input-field"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Year:
                            <input
                                type="text"
                                name="year"
                                value={entry.year}
                                onChange={(e) => handleChange('prizes', entry.id, 'year', e.target.value)}
                                className="input-field"
                            />
                        </label>
                    </div>
                </div>
            ))}
            <button type="button" onClick={() => addNewEntry('prizes')} className="add-button">Add Another Award</button>
        </div>
    );
}

export default Prizes;
