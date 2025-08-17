import React, { useState } from 'react';
import ResumeInstructions from './components/ResumeInstructions/ResumeInstructions';
import ResumeUpload from './components/ResumeUpload/ResumeUpload';
import ResumeInput from './components/ResumeInput/ResumeInput';
import './App.css';

function App() {
  const [showInstructions, setShowInstructions] = useState<boolean>(true);
  const [showResumeInput, setShowResumeInput] = useState<boolean>(false);
  const [showResumeUpload, setShowResumeUpload] = useState<boolean>(false);

  const handleResumeUploadClick = () => {
    setShowResumeUpload(true);
    setShowResumeInput(false);
    setShowInstructions(false);
  };

  const handleResumeInputClick = () => {
    setShowResumeInput(true);
    setShowResumeUpload(false);
    setShowInstructions(false);
  };
  
  return (
    <section className='resume-builder'>
      <h1>GovStar Resume Generator</h1>

      { showInstructions && <ResumeInstructions handleUploadClick={ handleResumeUploadClick } handleInputClick={ handleResumeInputClick } /> }
      { showResumeUpload && <ResumeUpload /> }
      { showResumeInput && <ResumeInput />}
    </section>
  );
}

export default App;