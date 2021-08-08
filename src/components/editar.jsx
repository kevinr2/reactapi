import React from 'react';
import {Apiurl} from '../services/apirest';
import axios from 'axios';
import Header from '../template/Header';

class Editar extends React.Component{

    state ={
        form:{
            "nombre" : "",
            "direccion":"",
            "dni" : "",
            "correo":"",
            "codigoPostal" :"",
            "genero" : "",
            "telefono" : "",
            "fechaNacimiento" : "",
            "token" : "" , 
            "pacienteId" : ""
        },
        error:false,
        errorMSG:""
    }

    manejadorChange= e=>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })  
        console.log(e.target.value)
        
    }
        manejadorSubmit = e =>{
        e.preventDefault();
    }

    put=()=>{
        let url = Apiurl +"pacientes";
        axios.put(url, this.state.form)
        .then(response=>{
            console.log(response);
        })
    }
    delete= ()=>{
        let url = Apiurl +"pacientes";
        let pacienteId = this.props.match.params.id;
        let datos ={
            "token": localStorage.getItem("token"),
            "pacienteId": pacienteId
        }
       axios.delete(url,{headers:datos})
       .then(response=>{
           this.props.history.push("/dashboard")
       })
    }

    
    
    componentDidMount(){
        let pacienteId = this.props.match.params.id;
        let url = Apiurl +"/pacientes?id=" + pacienteId;
        axios.get(url)
        .then(response =>{
            this.setState({
                form:{
                    nombre: response.data[0].Nombre,
                    direccion:response.data[0].Direccion,
                    dni: response.data[0].DNI,
                    correo:response.data[0].Correo,
                    codigoPostal:response.data[0].CodigoPostal,
                    genero: response.data[0].Genero,
                    telefono: response.data[0].Telefono,
                    fechaNacimiento:response.data[0].FechaNacimiento,
                    token: localStorage.getItem("token"), 
                    pacienteId: pacienteId
                }
                
            })
           
        })
 
    }


    render(){
        return(
            <React.Fragment>
                <Header></Header>
                <div className="container">
                    <h3>Editar paciente</h3>
                </div>
                <div className="container">
                    <form className="form-horizontal" onSubmit={this.manejadorSubmit}  >
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="col-md-10">
                                    <input className="form-control" name="nombre" placeholder="Nombre" type="text"
                                    value={this.state.form.nombre}
                                    onChange={this.manejadorChange} 
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12">  
                                <div className="col-md-10">
                                    <input className="form-control" name="direccion" placeholder="Direccion" type="text" 
                                        value={this.state.form.direccion} 
                                        onChange={this.manejadorChange} 
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-md-12">
                                    <input className="form-control" name="dni" placeholder="DNI" type="text" 
                                        value={this.state.form.dni} 
                                        onChange={this.manejadorChange} 
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">  
                                <div className="col-md-12">
                                    <input className="form-control" name="telefono" placeholder="Telefono" type="text"
                                    value={this.state.form.telefono}
                                    onChange={this.manejadorChange} 
                                     />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-md-12">
                                    <input className="form-control" name="codigoPostal" placeholder="Codigo Postal" type="text" 
                                        value={this.state.form.codigoPostal} 
                                        onChange={this.manejadorChange} 
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">  
                                <div className="col-md-12">
                                    <input className="form-control" name="genero" placeholder="Genero" type="text"
                                    value={this.state.form.genero}
                                    onChange={this.manejadorChange} 
                                      />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-md-12">
                                    <input className="form-control" name="correo" placeholder="Correo" type="text"
                                    value={this.state.form.correo} 
                                    onChange={this.manejadorChange} 
                                      />
                                </div>
                            </div>
                            <div className="col-sm-6">  
                                <div className="col-md-12"> 
                                    <input className="form-control" type="text"  name="fechaNacimiento"  placeholder="fecha de nacimiento" 
                                        value={this.state.form.fechaNacimiento} 
                                        onChange={this.manejadorChange} 
                                    />
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop:"30px"}}>
                            <button type="submit" className="btn  btn-primary" style={{marginRight: "10px"}} onClick={()=>this.put()}>Editar</button>
                            <button type="submit" className="btn  btn-danger" style={{marginRight: "10px"}} onClick={()=>this.delete()} >Eliminar</button>
                            <a className="btn  btn-dark" href="/dashboard">Salir</a>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Editar