import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const PacienteVacio = () => {
    return(
        <Fragment>
                <h1 className = "my-5">Administrador de Pacientes</h1>            
    
                <div className = "container mt-5 py-5">
                    <div className = "row">
                        <div className = "col-12 mb-5 d-flex justify-content-center">
                            <Link to={'/nueva'} className = "btn btn-success text-uppercase py-2 px-5 font-weigth-bold">Crear cita</Link>                        
                        </div>
                        <div className = "col-12 mb-5 d-flex justify-content-center">
                            <h2 className = "my-5">No hay citas, comienza creando una</h2>
                        </div>
                    </div>
                </div>
                
        </Fragment>
    )
}

export default PacienteVacio;

