import React from "react";
import './Components.css';

function PersonalDetails({ formData, handleChange }) {
    return (
        <div className="personal-details-container">
            <h2>Personal Details</h2>
            <div className="form-group">
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="form-group">
                <label>Phone:</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="form-group">
                <label>Portfolio:</label>
                <input
                    type="text"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="form-group">
                <label>LinkedIn:</label>
                <input
                    type="text"
                    name="linkedln"
                    value={formData.linkedln}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="form-group">
                <label>Other Link:</label>
                <input
                    type="text"
                    name="other_link"
                    value={formData.other_link}
                    onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
    );
}

export default PersonalDetails;
