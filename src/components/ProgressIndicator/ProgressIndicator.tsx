import React, { FC } from 'react';
import '../ProgressIndicator/styles.css';

const ProgressIndicator: FC = () => {
    return (
        <>
            <div className="progressIndicator">
                <h2>Please wait while generating your resume...</h2>
            </div>
        </>
    );
};

export default ProgressIndicator;