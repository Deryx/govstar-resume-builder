import React, { FC, FormEvent, useState } from 'react';
import './styles.css';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import ResumePreview from '../ResumePreview/ResumePreview';

const ResumeUpload: FC = () => {
    const [showProgressIndicator, setShowProgressIndicator] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<Record<string, string>>({});
    const [showForm, setShowForm] = useState<boolean>(true);
    const [showResumePreview, setShowResumePreview] = useState<boolean>(false);

    const handleResumeDownload = () => {};

    const handleEditResumeClick = () => {}

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setShowForm(false);
        setShowProgressIndicator(true);

        setTimeout(() => {
            setShowProgressIndicator(false);
            setShowResumePreview(true);
        }, 5000);        
    }

    return (
        <>  
            <h2>Resume Upload</h2>
            { showForm &&
                <form onSubmit={handleSubmit} method="post" className='form'>
                    <div className='upload-instructions'>
                        <p>Select a resume from your computer to upload, then click <strong>"Generate Resume"</strong> to upload.</p>
                    </div>
                    <div className='resume-upload'>
                        <div className='upload'>
                            <label htmlFor="resume">Upload resume (doc, docx, pdf)</label>
                            <input 
                                type="file" 
                                name="resume"
                                className="file-upload"
                                accept=".doc, .docx, .pdf"
                            />
                            <div className='submit-button'>
                                <input type="submit" value="Generate Resume" />
                            </div>
                        </div>
                    </div>
                </form>
            }
            { showProgressIndicator && <ProgressIndicator /> }
            { showResumePreview && <ResumePreview sections={ formValues } handleDownload={ handleResumeDownload } handleEditClick={ handleEditResumeClick} /> }
        </>
    );
};

export default ResumeUpload;