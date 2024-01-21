import React, { useState } from 'react';

const Step2ManualComponent = (props) => {

    const {setStep} = props;

    return(
        <div className='row'>
                <div className='col'>
                    <h1>Step 2</h1>
                </div>
                <div className='col'>
                    <button type="button" onClick={()=>setStep(1)} className='btn btn-danger'>Atras</button>
                </div>
                <div className='col'>
                    <button type="button" onClick={()=>setStep(3)} className='btn btn-success'>Siguiente</button>
                </div>
                
            </div>
    )
}

export default Step2ManualComponent;