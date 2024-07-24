
// import React, { useState } from "react";

// function FinalDetails({ personalData, formData, onEdit }) {
//     const [isEditing, setIsEditing] = useState(false);
//     const [editedPersonalData, setEditedPersonalData] = useState(personalData);
//     const [editedFormData, setEditedFormData] = useState(formData);

//     const handleInputChange = (event, category, index, field) => {
//         const value = event.target.value;
//         if (category === "personalData") {
//             setEditedPersonalData({
//                 ...editedPersonalData,
//                 [field]: value
//             });
//         } else {
//             const updatedFormData = { ...editedFormData };
//             updatedFormData[category][index][field] = value;
//             setEditedFormData(updatedFormData);
//         }
//     };

//     const handleSave = () => {
//         onEdit(editedPersonalData, editedFormData);
//         setIsEditing(false);
//     };

//     return (
//         <div>
//             <button onClick={() => setIsEditing(!isEditing)}>
//                 {isEditing ? "Cancel" : "Edit"}
//             </button>
//             {isEditing ? (
//                 <div>
//                     <h2>Personal Data</h2>
//                     <input
//                         type="text"
//                         value={editedPersonalData.name}
//                         onChange={(e) => handleInputChange(e, "personalData", null, "name")}
//                     />
//                     <input
//                         type="email"
//                         value={editedPersonalData.email}
//                         onChange={(e) => handleInputChange(e, "personalData", null, "email")}
//                     />
//                     <input
//                         type="text"
//                         value={editedPersonalData.phone}
//                         onChange={(e) => handleInputChange(e, "personalData", null, "phone")}
//                     />
//                     <input
//                         type="text"
//                         value={editedPersonalData.portfolio}
//                         onChange={(e) => handleInputChange(e, "personalData", null, "portfolio")}
//                     />
//                     <input
//                         type="text"
//                         value={editedPersonalData.linkedin}
//                         onChange={(e) => handleInputChange(e, "personalData", null, "linkedin")}
//                     />
//                     <input
//                         type="text"
//                         value={editedPersonalData.other_link}
//                         onChange={(e) => handleInputChange(e, "personalData", null, "other_link")}
//                     />

//                     <h2>Form Data</h2>
//                     <h3>Education</h3>
//                     {editedFormData.education.map((edu, index) => (
//                         <div key={index}>
//                             <input
//                                 type="text"
//                                 value={edu.name}
//                                 onChange={(e) => handleInputChange(e, "education", index, "name")}
//                             />
//                             <input
//                                 type="text"
//                                 value={edu.course}
//                                 onChange={(e) => handleInputChange(e, "education", index, "course")}
//                             />
//                             <input
//                                 type="text"
//                                 value={edu.gpa}
//                                 onChange={(e) => handleInputChange(e, "education", index, "gpa")}
//                             />
//                             <input
//                                 type="text"
//                                 value={edu.start}
//                                 onChange={(e) => handleInputChange(e, "education", index, "start")}
//                             />
//                             <input
//                                 type="text"
//                                 value={edu.end}
//                                 onChange={(e) => handleInputChange(e, "education", index, "end")}
//                             />
//                         </div>
//                     ))}

//                     <h3>Experience</h3>
//                     {editedFormData.experience.map((exp, index) => (
//                         <div key={index}>
//                             <input
//                                 type="text"
//                                 value={exp.position}
//                                 onChange={(e) => handleInputChange(e, "experience", index, "position")}
//                             />
//                             <input
//                                 type="text"
//                                 value={exp.company}
//                                 onChange={(e) => handleInputChange(e, "experience", index, "company")}
//                             />
//                             <input
//                                 type="text"
//                                 value={exp.desc}
//                                 onChange={(e) => handleInputChange(e, "experience", index, "desc")}
//                             />
//                             <input
//                                 type="text"
//                                 value={exp.start}
//                                 onChange={(e) => handleInputChange(e, "experience", index, "start")}
//                             />
//                             <input
//                                 type="text"
//                                 value={exp.end}
//                                 onChange={(e) => handleInputChange(e, "experience", index, "end")}
//                             />
//                         </div>
//                     ))}

//                     <h3>Projects</h3>
//                     {editedFormData.projects.map((proj, index) => (
//                         <div key={index}>
//                             <input
//                                 type="text"
//                                 value={proj.name}
//                                 onChange={(e) => handleInputChange(e, "projects", index, "name")}
//                             />
//                             <input
//                                 type="text"
//                                 value={proj.stacks}
//                                 onChange={(e) => handleInputChange(e, "projects", index, "stacks")}
//                             />
//                             <input
//                                 type="text"
//                                 value={proj.desc}
//                                 onChange={(e) => handleInputChange(e, "projects", index, "desc")}
//                             />
//                             <input
//                                 type="text"
//                                 value={proj.link}
//                                 onChange={(e) => handleInputChange(e, "projects", index, "link")}
//                             />
//                         </div>
//                     ))}

//                     <h3>Extracurriculars</h3>
//                     {editedFormData.extracurriculars.map((extra, index) => (
//                         <div key={index}>
//                             <input
//                                 type="text"
//                                 value={extra.club_name}
//                                 onChange={(e) => handleInputChange(e, "extracurriculars", index, "club_name")}
//                             />
//                             <input
//                                 type="text"
//                                 value={extra.position}
//                                 onChange={(e) => handleInputChange(e, "extracurriculars", index, "position")}
//                             />
//                             <input
//                                 type="text"
//                                 value={extra.start}
//                                 onChange={(e) => handleInputChange(e, "extracurriculars", index, "start")}
//                             />
//                             <input
//                                 type="text"
//                                 value={extra.end}
//                                 onChange={(e) => handleInputChange(e, "extracurriculars", index, "end")}
//                             />
//                             <input
//                                 type="text"
//                                 value={extra.desc}
//                                 onChange={(e) => handleInputChange(e, "extracurriculars", index, "desc")}
//                             />
//                             <input
//                                 type="text"
//                                 value={extra.skills_used}
//                                 onChange={(e) => handleInputChange(e, "extracurriculars", index, "skills_used")}
//                             />
//                         </div>
//                     ))}

//                     <h3>Prizes</h3>
//                     {editedFormData.prizes.map((prize, index) => (
//                         <div key={index}>
//                             <input
//                                 type="text"
//                                 value={prize.name}
//                                 onChange={(e) => handleInputChange(e, "prizes", index, "name")}
//                             />
//                             <input
//                                 type="text"
//                                 value={prize.year}
//                                 onChange={(e) => handleInputChange(e, "prizes", index, "year")}
//                             />
//                             <input
//                                 type="text"
//                                 value={prize.awarding_org}
//                                 onChange={(e) => handleInputChange(e, "prizes", index, "awarding_org")}
//                             />
//                         </div>
//                     ))}

//                     <h3>Skills</h3>
//                     {editedFormData.skills.map((skill, index) => (
//                         <div key={index}>
//                             <input
//                                 type="text"
//                                 value={skill.category}
//                                 onChange={(e) => handleInputChange(e, "skills", index, "category")}
//                             />
//                             <input
//                                 type="text"
//                                 value={skill.skills}
//                                 onChange={(e) => handleInputChange(e, "skills", index, "skills")}
//                             />
//                         </div>
//                     ))}

//                     <button onClick={handleSave}>Save</button>
//                 </div>
//             ) : (
//                 <div>
//                     <h2>Personal Data</h2>
//                     <p>Name: {personalData.name}</p>
//                     <p>Email: {personalData.email}</p>
//                     <p>Phone: {personalData.phone}</p>
//                     <p>Portfolio: {personalData.portfolio}</p>
//                     <p>LinkedIn: {personalData.linkedin}</p>
//                     <p>Other Link: {personalData.other_link}</p>

//                     <h2>Form Data</h2>

//                     <h3>Education</h3>
//                     {formData.education.map((edu, index) => (
//                         <div key={index}>
//                             <p>Name: {edu.name}</p>
//                             <p>Course: {edu.course}</p>
//                             <p>GPA: {edu.gpa}</p>
//                             <p>Start: {edu.start}</p>
//                             <p>End: {edu.end}</p>
//                         </div>
//                     ))}

//                     <h3>Experience</h3>
//                     {formData.experience.map((exp, index) => (
//                         <div key={index}>
//                             <p>Position: {exp.position}</p>
//                             <p>Company: {exp.company}</p>
//                             <p>Description: {exp.desc}</p>
//                             <p>Start: {exp.start}</p>
//                             <p>End: {exp.end}</p>
//                         </div>
//                     ))}

//                     <h3>Projects</h3>
//                     {formData.projects.map((proj, index) => (
//                         <div key={index}>
//                             <p>Name: {proj.name}</p>
//                             <p>Stacks: {proj.stacks}</p>
//                             <p>Description: {proj.desc}</p>
//                             <p>Link: {proj.link}</p>
//                         </div>
//                     ))}

//                     <h3>Extracurriculars</h3>
//                     {formData.extracurriculars.map((extra, index) => (
//                         <div key={index}>
//                             <p>Club Name: {extra.club_name}</p>
//                             <p>Position: {extra.position}</p>
//                             <p>Start: {extra.start}</p>
//                             <p>End: {extra.end}</p>
//                             <p>Description: {extra.desc}</p>
//                             <p>Skills Used: {extra.skills_used}</p>
//                         </div>
//                     ))}

//                     <h3>Prizes</h3>
//                     {formData.prizes.map((prize, index) => (
//                         <div key={index}>
//                             <p>Name: {prize.name}</p>
//                             <p>Year: {prize.year}</p>
//                             <p>Awarding Organization: {prize.awarding_org}</p>
//                         </div>
//                     ))}

//                     <h3>Skills</h3>
//                     {formData.skills.map((skill, index) => (
//                         <div key={index}>
//                             <p>Category Name: {skill.category}</p>
//                             <p>Skills: {skill.skills}</p>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default FinalDetails;


import React, { useState, useEffect } from "react";

function FinalDetails({ personalData, formData, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedPersonalData, setEditedPersonalData] = useState(personalData);
    const [editedFormData, setEditedFormData] = useState(formData);

    useEffect(() => {
        const savedResume = JSON.parse(localStorage.getItem('resume'));
        if (savedResume) {
            setEditedPersonalData(savedResume.personalData);
            setEditedFormData(savedResume.formData);
        }
    }, []);

    const handleInputChange = (event, category, index, field) => {
        const value = event.target.value;
        if (category === "personalData") {
            setEditedPersonalData({
                ...editedPersonalData,
                [field]: value
            });
        } else {
            const updatedFormData = { ...editedFormData };
            updatedFormData[category][index][field] = value;
            setEditedFormData(updatedFormData);
        }
    };

    const handleSave = () => {
        onEdit(editedPersonalData, editedFormData);
        setIsEditing(false);
    };

    const handleSaveResume = () => {
        const resume = {
            personalData: editedPersonalData,
            formData: editedFormData
        };
        localStorage.setItem('resume', JSON.stringify(resume));
        alert('Resume saved successfully!');
    };

    return (
        <div>
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Cancel" : "Edit"}
            </button>
            {isEditing ? (
                <div>
                    <h2>Personal Data</h2>
                    <input
                        type="text"
                        value={editedPersonalData.name}
                        onChange={(e) => handleInputChange(e, "personalData", null, "name")}
                    />
                    <input
                        type="email"
                        value={editedPersonalData.email}
                        onChange={(e) => handleInputChange(e, "personalData", null, "email")}
                    />
                    <input
                        type="text"
                        value={editedPersonalData.phone}
                        onChange={(e) => handleInputChange(e, "personalData", null, "phone")}
                    />
                    <input
                        type="text"
                        value={editedPersonalData.portfolio}
                        onChange={(e) => handleInputChange(e, "personalData", null, "portfolio")}
                    />
                    <input
                        type="text"
                        value={editedPersonalData.linkedin}
                        onChange={(e) => handleInputChange(e, "personalData", null, "linkedin")}
                    />
                    <input
                        type="text"
                        value={editedPersonalData.other_link}
                        onChange={(e) => handleInputChange(e, "personalData", null, "other_link")}
                    />

                    <h2>Form Data</h2>
                    <h3>Education</h3>
                    {editedFormData.education.map((edu, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={edu.name}
                                onChange={(e) => handleInputChange(e, "education", index, "name")}
                            />
                            <input
                                type="text"
                                value={edu.course}
                                onChange={(e) => handleInputChange(e, "education", index, "course")}
                            />
                            <input
                                type="text"
                                value={edu.gpa}
                                onChange={(e) => handleInputChange(e, "education", index, "gpa")}
                            />
                            <input
                                type="text"
                                value={edu.start}
                                onChange={(e) => handleInputChange(e, "education", index, "start")}
                            />
                            <input
                                type="text"
                                value={edu.end}
                                onChange={(e) => handleInputChange(e, "education", index, "end")}
                            />
                        </div>
                    ))}

                    <h3>Experience</h3>
                    {editedFormData.experience.map((exp, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={exp.position}
                                onChange={(e) => handleInputChange(e, "experience", index, "position")}
                            />
                            <input
                                type="text"
                                value={exp.company}
                                onChange={(e) => handleInputChange(e, "experience", index, "company")}
                            />
                            <input
                                type="text"
                                value={exp.desc}
                                onChange={(e) => handleInputChange(e, "experience", index, "desc")}
                            />
                            <input
                                type="text"
                                value={exp.start}
                                onChange={(e) => handleInputChange(e, "experience", index, "start")}
                            />
                            <input
                                type="text"
                                value={exp.end}
                                onChange={(e) => handleInputChange(e, "experience", index, "end")}
                            />
                        </div>
                    ))}

                    <h3>Projects</h3>
                    {editedFormData.projects.map((proj, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={proj.name}
                                onChange={(e) => handleInputChange(e, "projects", index, "name")}
                            />
                            <input
                                type="text"
                                value={proj.stacks}
                                onChange={(e) => handleInputChange(e, "projects", index, "stacks")}
                            />
                            <input
                                type="text"
                                value={proj.desc}
                                onChange={(e) => handleInputChange(e, "projects", index, "desc")}
                            />
                            <input
                                type="text"
                                value={proj.link}
                                onChange={(e) => handleInputChange(e, "projects", index, "link")}
                            />
                        </div>
                    ))}

                    <h3>Extracurriculars</h3>
                    {editedFormData.extracurriculars.map((extra, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={extra.club_name}
                                onChange={(e) => handleInputChange(e, "extracurriculars", index, "club_name")}
                            />
                            <input
                                type="text"
                                value={extra.position}
                                onChange={(e) => handleInputChange(e, "extracurriculars", index, "position")}
                            />
                            <input
                                type="text"
                                value={extra.start}
                                onChange={(e) => handleInputChange(e, "extracurriculars", index, "start")}
                            />
                            <input
                                type="text"
                                value={extra.end}
                                onChange={(e) => handleInputChange(e, "extracurriculars", index, "end")}
                            />
                            <input
                                type="text"
                                value={extra.desc}
                                onChange={(e) => handleInputChange(e, "extracurriculars", index, "desc")}
                            />
                            <input
                                type="text"
                                value={extra.skills_used}
                                onChange={(e) => handleInputChange(e, "extracurriculars", index, "skills_used")}
                            />
                        </div>
                    ))}

                    <h3>Prizes</h3>
                    {editedFormData.prizes.map((prize, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={prize.name}
                                onChange={(e) => handleInputChange(e, "prizes", index, "name")}
                            />
                            <input
                                type="text"
                                value={prize.year}
                                onChange={(e) => handleInputChange(e, "prizes", index, "year")}
                            />
                            <input
                                type="text"
                                value={prize.awarding_org}
                                onChange={(e) => handleInputChange(e, "prizes", index, "awarding_org")}
                            />
                        </div>
                    ))}

                    <h3>Skills</h3>
                    {editedFormData.skills.map((skill, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={skill.category}
                                onChange={(e) => handleInputChange(e, "skills", index, "category")}
                            />
                            <input
                                type="text"
                                value={skill.skills}
                                onChange={(e) => handleInputChange(e, "skills", index, "skills")}
                            />
                        </div>
                    ))}

                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <h2>Personal Data</h2>
                    <p>Name: {personalData.name}</p>
                    <p>Email: {personalData.email}</p>
                    <p>Phone: {personalData.phone}</p>
                    <p>Portfolio: {personalData.portfolio}</p>
                    <p>LinkedIn: {personalData.linkedin}</p>
                    <p>Other Link: {personalData.other_link}</p>

                    <h2>Form Data</h2>

                    <h3>Education</h3>
                    {formData.education.map((edu, index) => (
                        <div key={index}>
                            <p>Name: {edu.name}</p>
                            <p>Course: {edu.course}</p>
                            <p>GPA: {edu.gpa}</p>
                            <p>Start: {edu.start}</p>
                            <p>End: {edu.end}</p>
                        </div>
                    ))}

                    <h3>Experience</h3>
                    {formData.experience.map((exp, index) => (
                        <div key={index}>
                            <p>Position: {exp.position}</p>
                            <p>Company: {exp.company}</p>
                            <p>Description: {exp.desc}</p>
                            <p>Start: {exp.start}</p>
                            <p>End: {exp.end}</p>
                        </div>
                    ))}

                    <h3>Projects</h3>
                    {formData.projects.map((proj, index) => (
                        <div key={index}>
                            <p>Name: {proj.name}</p>
                            <p>Stacks: {proj.stacks}</p>
                            <p>Description: {proj.desc}</p>
                            <p>Link: {proj.link}</p>
                        </div>
                    ))}

                    <h3>Extracurriculars</h3>
                    {formData.extracurriculars.map((extra, index) => (
                        <div key={index}>
                            <p>Club Name: {extra.club_name}</p>
                            <p>Position: {extra.position}</p>
                            <p>Start: {extra.start}</p>
                            <p>End: {extra.end}</p>
                            <p>Description: {extra.desc}</p>
                            <p>Skills Used: {extra.skills_used}</p>
                        </div>
                    ))}

                    <h3>Prizes</h3>
                    {formData.prizes.map((prize, index) => (
                        <div key={index}>
                            <p>Name: {prize.name}</p>
                            <p>Year: {prize.year}</p>
                            <p>Awarding Organization: {prize.awarding_org}</p>
                        </div>
                    ))}

                    <h3>Skills</h3>
                    {formData.skills.map((skill, index) => (
                        <div key={index}>
                            <p>Category Name: {skill.category}</p>
                            <p>Skills: {skill.skills}</p>
                        </div>
                    ))}
                </div>
            )}
            {/* <button onClick={handleSaveResume}>Save Resume</button> */}
        </div>

    );
}

export default FinalDetails;
