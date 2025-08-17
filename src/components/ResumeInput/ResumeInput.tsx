import React, { FC, useState,useRef, FormEvent, MouseEvent } from 'react';
import ResumeSection from '../ResumeSection/ResumeSection';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import ResumePreview from '../ResumePreview/ResumePreview';
import './styles.css';

const ResumeInput: FC = () => {
    const [formValues, setFormValues] = useState<Record<string, string>>({});
    const [showForm, setShowForm] = useState<boolean>(true);
    const [showProgressIndicator, setShowProgressIndicator] = useState<boolean>(false);
    const [showResumePreview, setShowResumePreview] = useState<boolean>(false);
    const [resumeSections, setResumeSections] = useState( new Set<string>() );
    const sectionRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    };

    const handleResumeDownload = () => {}

    const handleEditResumeClick = () => {
        setShowResumePreview(false);
        setShowForm(true);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setShowForm(false);
        setShowProgressIndicator(true);

        setTimeout(() => {
            setShowProgressIndicator(false);
            setShowResumePreview(true);
        }, 5000);        
   }

    const handleDeleteSectionClick = (e: MouseEvent <HTMLButtonElement>) => {
        e.preventDefault();

        const sectionToDelete = e.target && e.target as HTMLDivElement;
        const sectionToDeleteParent = sectionToDelete && sectionToDelete.parentElement?.parentElement?.parentElement;
        const sectionId = sectionToDeleteParent && sectionToDeleteParent.id;
        (sectionId &&formValues[sectionId]) && delete formValues[sectionId];
        sectionId && resumeSections.delete(sectionId);

        sectionToDeleteParent && sectionToDeleteParent.remove();
        
        sectionId && setResumeSections(resumeSections);
    };

    const handleAddSectionClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newSection = sectionRef.current && sectionRef.current.value as string;
        
        newSection && setResumeSections(prev => new Set([...prev, newSection]));

        sectionRef.current && (sectionRef.current.value = '');
    };
    
    return (
        <>
            <h2>Resume Input</h2>
            { showForm && 
                <form onSubmit={handleSubmit} method="post" className='form'>
                    <div className='input-instructions'>
                        <p>In the <strong>"Add Resume Sections"</strong>, type in the section you would like to include in the resume, in the order you would like them to appear, and press <strong>"Add Section"</strong>. You can use the following sections headings:</p>
                        <div className='section-list'>
                            <div>
                                <ul>
                                    <li>contact information</li>
                                    <li>objective</li>
                                    <li>work experience</li>
                                    <li>education</li>
                                    <li>skills</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>accomplishments</li>
                                    <li>activities</li>
                                    <li>affiliations</li>
                                    <li>course work</li>
                                    <li>honors & awards</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>licenses & certifications</li>
                                    <li>activities</li>
                                    <li>military experience</li>
                                    <li>patents</li>
                                    <li>personal interests</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>projects</li>
                                    <li>publications</li>
                                    <li>training</li>
                                    <li>qualifications</li>
                                    <li>or any other section</li>
                                </ul>
                            </div>
                        </div>
                        <p>After you have added the sections you would like to include in the resume, click <strong>"Generate Resume"</strong> to produce a preview of your resume.</p>
                    </div>

                    <div className='resume-input'>
                        <section className='resume-sections'>
                            <h3>Resume Sections</h3>
                            { Array.from(resumeSections).map(section => (
                                <ResumeSection key={ section } title={section} handleButtonClick={ handleDeleteSectionClick } handleChange={ handleInputChange } />
                            )) }
                        </section>
                        <div className='add-section'>
                            <section>
                                <h3>Add Resume Sections</h3>
                                <input type="text" ref={ sectionRef } name='section' placeholder='Add a section' />
                                <button onClick={ handleAddSectionClick }>add section</button>
                            </section>
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
    )
}

export default ResumeInput;