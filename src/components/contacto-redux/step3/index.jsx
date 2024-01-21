import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStepContactoComponentAction } from '../../../redux/slices/contactoComponentSlice';
const Step3ReduxComponent = () => {

    //operacion de escritura
    const dispatch = useDispatch();

    const handleNext = (step)=> {
        dispatch(setStepContactoComponentAction(step))
    }
    
    return(
        <div className='row'>
                <div className='col'>
                    <h1>Step 3</h1>
                </div>
                <div className='col'>
                    <button type="button" onClick={()=>handleNext(2)} className='btn btn-danger'>Atras</button>
                </div>
            </div>
    )
}

export default Step3ReduxComponent;