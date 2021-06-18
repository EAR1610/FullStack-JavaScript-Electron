import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';

import clienteAxios from '../config/axios';

const NuevaCita = ( { history, guardarConsultar } ) => {

    //Generar state como un objeto
    const [cita, guardarCita] = useState({
        nombre : '',
        propietario : '',
        fecha : '',
        hora : '',
        telefono : '',
        sintomas : ''
    });

    //Lee los datos del formulario
    const actualizarState = e => {
        guardarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    
    //Enviar una petición a la API
    const crearNuevaCita = e => {
        e.preventDefault();

        const { nombre, propietario, telefono, fecha, hora, sintomas } = cita

        if(nombre === "" || propietario === "" || telefono === "" || fecha === "" || hora === "" || sintomas === "" ){
            Swal.fire({
                icon: 'error',
                title: 'Formulario Incompleto.',
                text: 'Los datos no deben de estar vacios', 
            })
            return;           
        }

        //Enviar la Petición por Axios
        clienteAxios.post('/pacientes', cita)
            .then(respuesta => {
                console.log(respuesta);

                guardarConsultar(true);

                Swal.fire({                    
                    icon: 'success',
                    title: 'La cita se ha guardado exitosamente',
                    showConfirmButton: false,
                    timer: 1500
                  })

                //Redireccionar
                history.push('/')
            })
            .catch(error => console.log(error))
    }

    return ( 
        <Fragment>
            <h1 className = "my-5">Crear una Cita</h1>

            <div className = "container mt-5 py-5">
                <div className = "row">
                    <div className = "col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className = "btn btn-success text-uppercase py-2 px-5 font-weigth-bold">Volver</Link>
                    </div>
                </div>
                <div classname = "col-md-8 mx-auto">
                    <form 
                        onSubmit = { crearNuevaCita }
                        className="bg-white p-5 bordered">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre Mascota</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                id="nombre" 
                                name="nombre" 
                                placeholder="Nombre Mascota" 
                                onChange = { actualizarState }
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="propietario">Nombre Propietario</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                id="propietario" 
                                name="propietario" 
                                placeholder="Nombre Propietario"
                                onChange = { actualizarState } 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="telefono">Teléfono</label>
                            <input 
                                type="tel" 
                                className="form-control form-control-lg" 
                                id="telefono" 
                                name="telefono" 
                                placeholder="Teléfono"
                                onChange = { actualizarState } 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="fecha">Fecha Alta</label>
                            <input 
                                type="date" 
                                className="form-control form-control-lg" 
                                id="fecha" 
                                name="fecha"
                                onChange = { actualizarState }  
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="hora">Hora Alta</label>
                            <input 
                                type="time" 
                                className="form-control form-control-lg" 
                                id="hora" 
                                name="hora"
                                onChange = { actualizarState }  
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="sintomas">Síntomas</label>
                            <textarea 
                                className="form-control" 
                                name="sintomas" 
                                rows="6"                                
                                onChange = { actualizarState }
                            ></textarea>
                        </div>

                        <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Crear Cita"  />
                    </form>
                </div>
            </div>
        </Fragment>
     );
}
 
export default withRouter(NuevaCita);