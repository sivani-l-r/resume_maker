import jsPDF from 'jspdf';

const setFont = (doc, font = 'times', style = 'normal', size = 12) => {
    doc.setFont(font, style);
    doc.setFontSize(size);
};

const addText = (doc, text = '', x = 10, y = 10, options = {}) => {
    if (options.link) {
        doc.textWithLink(text, x, y, { url: options.link });
        if (options.underline) {
            const textWidth = doc.getTextWidth(text);
            doc.setLineWidth(0.2); 
            doc.line(x, y + 1, x + textWidth, y + 1); 
        }
    } else {
        doc.text(text, x, y);
    }
};


const drawHorizontalLine = (doc, startX = 10, endX = 200, y = 10) => {
    doc.line(startX, y, endX, y);
};

const formatURL = (url) => {
    try {
        const urlObject = new URL(url);
        return urlObject.hostname.replace('www.', '') + urlObject.pathname;
    } catch (e) {
        console.error('Invalid URL:', url);
        return url;
    }
};

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const addWrappedText = (doc, text, x, y, maxWidth) => {
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return lines.length * doc.getTextDimensions(lines[0]).h; 
};





export const resumePDF = (personalData = {}, formData = { education: [] }) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const spacing = 5;

    // Add name
    setFont(doc, 'times', 'bold', 22);
    if (personalData.name) {
        const nameTextWidth = doc.getTextWidth(personalData.name);
        const nameX = (pageWidth - nameTextWidth) / 2;
        addText(doc, personalData.name, nameX, 10);
    }

    // Add personal details
    setFont(doc, 'times', 'normal', 12);
    let startY = 20;
    let currentX = 15;

    const addDetail = (text, link) => {
        if (text) {
            addText(doc, text, currentX, startY, { link, underline: !!link });
            currentX += doc.getTextWidth(text) + spacing;
        }
    };

    addDetail(personalData.phone);
    addDetail(personalData.email, `mailto:${personalData.email}`);
    if (personalData.portfolio) {
        addDetail('portfolio', personalData.portfolio);
    }
    addDetail(personalData.linkedin ? formatURL(personalData.linkedin) : '', personalData.linkedin);
    addDetail(personalData.other_link ? formatURL(personalData.other_link) : '', personalData.other_link);


    // Add education section
    setFont(doc, 'times', 'bold', 16);
    startY += 10;
    addText(doc, 'Education', 10, startY);
    drawHorizontalLine(doc, 10, pageWidth - 10, startY + 2);

    formData.education.forEach((edu) => {
        startY += 8;
        setFont(doc, 'times', 'bold', 12);
        addText(doc, edu.name || '', 10, startY);

        const termText = `${formatDate(edu.start)} - ${formatDate(edu.end)}`;
        const termX = pageWidth - 10 - doc.getTextWidth(termText);
        addText(doc, termText, termX, startY);

        startY += 5;
        setFont(doc, 'times', 'italic', 12);
        addText(doc, `${edu.course || ''} CGPA: ${edu.cgpa || ''}`, 10, startY);
    });

    // Add experience section
    setFont(doc, 'times', 'bold', 16);
    startY += 8;
    addText(doc, 'Experience', 10, startY);
    drawHorizontalLine(doc, 10, pageWidth - 10, startY + 2);
    startY += 8;
    formData.experience.forEach((exp) => {
        
        setFont(doc, 'times', 'bold', 12);
        addText(doc, exp.position || '', 10, startY);

        const termText = `${formatDate(exp.start)} - ${formatDate(exp.end)}`;
        const termX = pageWidth - 10 - doc.getTextWidth(termText);
        addText(doc, termText, termX, startY);

        startY += 5;
        setFont(doc, 'times', 'italic', 12);
        addText(doc, `${exp.company || ''}`, 10, startY); 
        const skillsUsedText = `${exp.skills_used || ''}`; 
        const skillsUsedTextX = pageWidth - 10 - doc.getTextWidth(skillsUsedText);
        addText(doc,skillsUsedText,skillsUsedTextX,startY);

        startY += 5;
        setFont(doc, 'times', 'normal', 12);
        const textHeight = addWrappedText(doc, exp.desc || '', 10, startY, pageWidth - 20);
        startY += textHeight + 5;
    });

    // Add projects section
    setFont(doc, 'times', 'bold', 16);
    addText(doc, 'Projects', 10, startY);
    drawHorizontalLine(doc, 10, pageWidth - 10, startY + 2);
    startY += 8;
    formData.projects.forEach((proj) => {
        setFont(doc, 'times', 'bold', 12);
        addText(doc, proj.name || '', 10, startY);
        const projectNameWidth = doc.getTextWidth(proj.name) + 15;
        setFont(doc, 'times', 'italic', 12);
        addText(doc, proj.stacks || '', projectNameWidth, startY);

        startY += 5;
        setFont(doc, 'times', 'normal', 12);
        const textHeight = addWrappedText(doc, proj.desc || '', 10, startY, pageWidth - 20);
        startY += textHeight + 5;
    });

    // Add skills section
    setFont(doc, 'times', 'bold', 16);
    addText(doc, 'Skills', 10, startY);
    drawHorizontalLine(doc, 10, pageWidth - 10, startY + 2);
    startY += 8;
    formData.skills.forEach((skill) => {
        setFont(doc, 'times', 'bold', 12);
        addText(doc, skill.category || '', 10, startY);
        const categoryNameWidth = doc.getTextWidth(skill.category) + 15;
        setFont(doc, 'times', 'normal', 12);
        addText(doc, skill.skills || '', categoryNameWidth, startY);
        startY += 5;
    });

    // Add extracurriculars section
    setFont(doc, 'times', 'bold', 16);
    startY += 5;
    addText(doc, 'Extracurricular', 10, startY);
    drawHorizontalLine(doc, 10, pageWidth - 10, startY + 2);
    startY += 8;
    formData.extracurriculars.forEach((extra) => {
        setFont(doc, 'times', 'bold', 12);
        addText(doc, extra.club_name || '', 10, startY);
        const termText = `${formatDate(extra.start)} - ${formatDate(extra.end)}`;
        const termX = pageWidth - 10 - doc.getTextWidth(termText);
        addText(doc, termText, termX, startY);

        startY += 5;
        setFont(doc, 'times', 'italic', 12);
        addText(doc, `${extra.position || ''}`, 10, startY); 
        const skillsUsedText = `${extra.skills_used || ''}`; 
        const skillsUsedTextX = pageWidth - 10 - doc.getTextWidth(skillsUsedText);
        addText(doc, skillsUsedText, skillsUsedTextX, startY);

        startY += 5;
        setFont(doc, 'times', 'normal', 12);
        const textHeight = addWrappedText(doc, extra.desc || '', 10, startY, pageWidth - 20);
        startY += textHeight + 5;
    });

    // Add awards section
    setFont(doc, 'times', 'bold', 16);
    addText(doc, 'Awards', 10, startY);
    drawHorizontalLine(doc, 10, pageWidth - 10, startY + 2);
    startY += 8;
    formData.prizes.forEach((prize) => {
        setFont(doc, 'times', 'bold', 12);
        addText(doc, prize.name || '', 10, startY);
        const orgText = `${prize.awarding_org || ''}`;
        const orgX = pageWidth - 10 - doc.getTextWidth(orgText);
        addText(doc, orgText, orgX, startY);
        startY += 5;
        setFont(doc, 'times', 'italic', 12);
        addText(doc, `${prize.year || ''}`, 10, startY); 
        startY += 5;
    });



    doc.save(`${personalData.name} Resume.pdf`);
};
