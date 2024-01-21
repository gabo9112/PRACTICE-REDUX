import React, { useState } from 'react';

const Step1ManualComponent = (props) => {

    const {setStep} = props;
    return(
        <div className='row'>
                <div className='col'>
                    <h1>Step 1</h1>
                </div>
                <div className='col'>
                    <button type="button" onClick={()=>setStep(2)} className='btn btn-success'>Siguiente</button>
                </div>
        </div>
    )
}

export default Step1ManualComponent;