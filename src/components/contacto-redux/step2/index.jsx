import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStepContactoComponentAction } from '../../../redux/slices/contactoComponentSlice';
const Step2ReduxComponent = () => {

    //operacion de escritura
    const dispatch = useDispatch();

    const handleNext = (step)=> {
        dispatch(setStepContactoComponentAction(step))
    }

    return(
        <div className='row'>
                <div className='col'>
                    <h1>Step 2</h1>
                </div>
                <div className='col'>
                    <button type="button" onClick={()=>handleNext(1)} className='btn btn-danger'>Atras</button>
                </div>
                <div className='col'>
                    <button type="button" onClick={()=>handleNext(3)} className='btn btn-success'>Siguiente</button>
                </div>
                
            </div>
    )
}

export default Step2ReduxComponent;