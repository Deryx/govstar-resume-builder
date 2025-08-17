import React, { FC, MouseEventHandler } from "react";
import "../ResumeSection/styles.css";

interface ResumeSectionProps {
    title: string;
    handleButtonClick: MouseEventHandler<HTMLButtonElement>
    handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const ResumeSection: FC<ResumeSectionProps> = ({ title, handleButtonClick, handleChange }) => {
    return (
        <div id={ title } className="resume-section">
            <header>
                <span className="section-title">
                    <label htmlFor={ title}>
                        { title }
                    </label>
                </span>
                <span className="delete-section">
                    <button onClick={ handleButtonClick }>X</button>
                </span>
            </header>
            <div className="content">
                <textarea name={title} onChange={ handleChange } />
            </div>
        </div>
    );
};

export default ResumeSection;