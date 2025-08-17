import React, { FC, MouseEvent } from 'react';
import './styles.css';

interface ResumePreviewProps {
    sections: { [key: string]: string };
    handleDownload: (e: MouseEvent<HTMLButtonElement>) => void;
    handleEditClick: (e: MouseEvent<HTMLButtonElement>) => void;
 }

const ResumePreview: FC<ResumePreviewProps> = ({ sections, handleDownload, handleEditClick }) => {
    return (
        <section className='resume-preview'>
            <h3>Resume Preview</h3>
            <div className='resume'>
                { sections && Array.from(Object.keys(sections)).map(key => 
                  <section>
                    <h4>{ key }</h4>
                    <div>{ sections[key] }</div>
                  </section>
                ) }
            </div>
            <div className='buttons'>
                <button className='download-button' onClick={handleDownload}>Download Resume</button>
                <button className='edit-button' onClick={handleEditClick}>Edit Resume</button>
            </div>
        </section>
    );
};

export default ResumePreview;