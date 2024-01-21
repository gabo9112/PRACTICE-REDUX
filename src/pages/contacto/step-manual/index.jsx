import React, { useState } from 'react';
import Step1ManualComponent from '../../../components/contacto/step1';
import Step2ManualComponent from '../../../components/contacto/step2';
import Step3ManualComponent from '../../../components/contacto/step3';

const ContactoStepManualPage = () => {

    const [step, setStep] = useState(1);

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    {step == 1 && <Step1ManualComponent setStep={setStep} />}
                    {step == 2 && <Step2ManualComponent setStep={setStep}/>}
                    {step == 3 && <Step3ManualComponent setStep={setStep}/>}
                </div>
            </div>
        
        </div>
    )
}

export default ContactoStepManualPage;