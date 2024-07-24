import React, { useState } from "react";
import './ResumeForm.css';
import PersonalDetails from "./Components/PersonalDetails";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { resumePDF } from "../../utils/pdfUtils";
import ExtraCurriculurs from "./Components/ExtraCurriculurs";
import Prizes from "./Components/Prizes";
import FinalDetails from "./Components/FinalDetails";

function ResumeForm() {
    const [personalData, setPersonalData] = useState({
        name: '', 
        email: '', 
        phone: '', 
        portfolio: '', 
        linkedin: '',
        other_link: '',
    });

    const [formData, setFormData] = useState({
        education: [
            { id: 1, name: '', course: '', gpa: '', start: '', end: '' }
        ],
        experience: [
            { id: 1, position: '', company: '',skills_used: '', desc: '', start: '', end: '' }
        ],
        projects: [
            { id: 1, name: '', stacks: '', desc: '' , link: '' }
        ],
        extracurriculars: [
            {id: 1, club_name: '', position: '', start: '', end: '', desc: '', skills_used: ''}
        ],
        prizes: [
            {id: 1, name: '',year:'', awarding_org:''}
        ],
        skills:[
            {id: 1, category: '', skills: ''}
        ]
        
    });

    const [currentStep,setCurrentStep]= useState(0);
    

    const handlePersonalDataChange = (e) => {
        const { name, value } = e.target;
        setPersonalData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleChange = (section, id, field, value) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [section]: prevFormData[section].map(item =>
                item.id === id ? { ...item, [field]: value } : item
            )
        }));
    };

    const addNewEntry = (section) => {
        const newId = formData[section].length + 1;
        setFormData(prevFormData => ({
            ...prevFormData,
            [section]: [...prevFormData[section], { id: newId }]
        }));
    };

    const handleNext = () => {
        setCurrentStep(prevStep => prevStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep(prevStep => prevStep - 1);
    };

    const handleEdit = (newPersonalData, newFormData) => {
        setPersonalData(newPersonalData);
        setFormData(newFormData);
    };


    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <PersonalDetails formData={personalData} handleChange={handlePersonalDataChange} />;
            case 1:
                return <Education formData={formData.education} handleChange={handleChange} addNewEntry={addNewEntry} />;
            case 2:
                return <Experience formData={formData.experience} handleChange={handleChange} addNewEntry={addNewEntry} />;
            case 3:
                return <Projects formData={formData.projects} handleChange={handleChange} addNewEntry={addNewEntry} />;
            case 4: 
                return <ExtraCurriculurs formData={formData.extracurriculars} handleChange={handleChange} addNewEntry={addNewEntry} />;
            case 5:
                return <Prizes formData={formData.prizes} handleChange={handleChange} addNewEntry={addNewEntry} />;
            case 6: 
                return <Skills formData={formData.skills} handleChange={handleChange} addNewEntry={addNewEntry} />;
            case 7:
                return <FinalDetails personalData={personalData} formData={formData} onEdit={handleEdit} />
            default:
                return null;
        }
    };

    

    const handleFormSubmit = (e) => {
        e.preventDefault();
        resumePDF(personalData, formData);
    };

    // const handleLoadSavedResume = () =>
    // {
        
    // }

    return (
        <div>
            {/* <button >Load Saved Resume</button> */}
            <div className="resume-form">

        {renderStep()}
        <div className="button-group">
            {currentStep > 0 && <button type="button" onClick={handlePrev}>Prev</button>}
            {currentStep < 7 ? (
                <button type="button" onClick={handleNext}>Next</button>
            ) : (
                <button type="submit" onClick={handleFormSubmit}>Submit</button>
            )}
        </div>
        </div>
        </div>
    );
}

export default ResumeForm;


