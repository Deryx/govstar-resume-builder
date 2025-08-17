import React, { FC } from 'react';
import './styles.css';

interface ResumeInstructionsProps {
    handleUploadClick: () => void;
    handleInputClick: () => void;
};

const ResumeInstructions: FC<ResumeInstructionsProps> = ({ handleUploadClick, handleInputClick }) => {
    return (
      <div className='instructions'>
        <button onClick={ handleUploadClick }>
          <span className='instruction'>Upload your current resume</span>
          <span className='tagline'>We'll move everything over to your new template</span>
        </button>
        <button onClick={ handleInputClick }>
          <span className='instruction'>Build a new resume</span>
          <span className='tagline'>We'll provide the sections you need</span>
        </button>
      </div>
    );    
};

export default ResumeInstructions;