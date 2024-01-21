import React, { useEffect, useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';
import HomePage from '../home/home';
import ClientesPage from '../clientes/clientes';
const LoginPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [clave, setClave] = useState("");

    //useEffect(()=>{}) // Ciclo de vida, se le conoce como fase de actualización o constante monitoreo, se va a ejecutar siempre, cada que detecte que hay un cambio en un hook, sin importar el hook que sea.
    //useEffect(()=>{},[]) // Ciclo de vida, se le conoce como fase de montaje, se ejecuta una sola vez cuando carga el componente, sin importar que los demás hooks states cambien de estado.
    //useEffect(()=>{},[usuario]) // Ciclo de vida, se le conoce como fase de actualización, se ejecuta cuando carga el componente y cuando detecta que hay un cambio, en el hook state que tiene como dependencia.

    // useEffect(()=>{
    //     console.log("Mostrando mensaje")
    // })

    useEffect(()=>{
        console.log("Mostrando mensaje")
    },[])

    // useEffect(()=>{
    //     console.log("Mostrando mensaje")
    // },[email])

    // useEffect(()=>{
    //     return () => {
    //         console.log("Destruyendo el componente")
    //     } 
    // },[])

    return(
        <section style={{height: '100vh'}}>
            <div className="container h-100 d-flex justify-content-center align-items-center">
                <div className="row d-flex justify-content-center w-100">
                    <div className='col-lg-6'>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title text-center">Login</div>

                                <div className="mb-3">
                                    <label>Correo</label>
                                    <input type="email" id="email" onBlur={(e)=>setEmail(e.target.value)} className="form-control" name="correo" />
                                </div>

                                <div className="mb-3">
                                    <label>Clave</label>
                                    <input type="password" id="password" onBlur={(e)=>setClave(e.target.value)} className="form-control" name="clave" />
                                </div>

                                <div className="mb-3">
                                    <button type="button" onClick={()=>navigate("/")} className='btn btn-success'>Enviar</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <HomePage emailProp={email}/>
        <ClientesPage emailProp={email} />
        </section>
    )
}

export default LoginPage;