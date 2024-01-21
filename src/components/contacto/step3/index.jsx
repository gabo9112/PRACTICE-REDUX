import React, { useState } from 'react';

const Step3ManualComponent = (props) => {

    const {setStep} = props;
    
    return(
        <div className='row'>
                <div className='col'>
                    <h1>Step 3</h1>
                </div>
                <div className='col'>
                    <button type="button" onClick={()=>setStep(2)} className='btn btn-danger'>Atras</button>
                </div>
            </div>
    )
}

export default Step3ManualComponent;