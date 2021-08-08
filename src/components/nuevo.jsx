import React from 'react';
import Header from '../template/Header';
import { Apiurl } from '../services/apirest';
import axios from 'axios';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class Nuevo extends React.Component{

    state ={
        form:{
            "nombre" : "",
            "direccion":"",
            "dni" : "",
            "correo":"",
            "codigoPostal" :"",
            "genero" : "",
            "telefono" : "",
            "fechaNacimiento" :"",
            "token" :  localStorage.getItem("token") , 
            "pacienteId" : ""
        },
        error:false,
        errorMSG:"",
        fecha:new Date("2000","08","25")
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
    post=()=>{
        let url = Apiurl +"pacientes";
        axios.post(url, this.state.form)
        .then(response=>{
            console.log(response);
            this.props.history.push("/dashboard");
        })
    }
   
    onChange=fecha=>{
       
      const year = fecha.getFullYear();
      const  month= fecha.getMonth()+1;
      const day = fecha.getDate();
     const date = `${year}-${month<10?`0${month}`:`${month}`}-${day<10?`0${day}`:`${day}`}`;
     console.log(date);
        this.setState({
            fecha:fecha 
        })
        this.setState({
            form:{
                "fechaNacimiento": date 
            }
        })
    
    }

    render(){
        return(
       <React.Fragment>
           <Header></Header>
           <div className="container">
                    <h3>Nuevo paciente</h3>
                </div>
                <div className="container">
                    <form className="form-horizontal" onSubmit={this.manejadorSubmit}  >
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="col-md-10">
                                    <input className="form-control" name="nombre" placeholder="Nombre" type="text"
                                    onChange={this.manejadorChange}
                                    required />
                                </div>
                            </div>
                            <div className="col-sm-12">  
                                <div className="col-md-10">
                                    <input className="form-control" name="direccion" placeholder="Direccion" type="text" 
                                    onChange={this.manejadorChange}
                                     />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-md-12">
                                    <input className="form-control" name="dni" placeholder="DNI" type="text" 
                                     onChange={this.manejadorChange}
                                    required/>
                                </div>
                            </div>
                            <div className="col-sm-6">  
                                <div className="col-md-12">
                                    <input className="form-control" name="telefono" placeholder="Telefono" type="text"
                                  onChange={this.manejadorChange}
                                     />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-md-12">
                                    <input className="form-control" name="codigoPostal" placeholder="Codigo Postal" type="text" 
                                  onChange={this.manejadorChange}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">  
                                <div className="col-md-12">
                                    <input className="form-control" name="genero" placeholder="Genero" type="text"
                                 onChange={this.manejadorChange}
                                      />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-md-12">
                                    <input className="form-control" name="correo" placeholder="Correo" type="text"
                                    onChange={this.manejadorChange}
                                     required />
                                </div>
                            </div>
                            <div className="col-sm-6">  
                                <div className="col-md-12"> 
                                <label className="label-control"> fecha nacimiento</label>

                                <DatePicker id="fechaNacimiento"      
                                    showYearDropdown
                                    yearDropdownItemNumber={50}
                                    scrollableYearDropdown selected={this.state.fecha}
                                    onChange={this.onChange}  className="form-control" 
                                    
                                />
                                   
                                </div>
                                
                        



                            </div>
                        </div>
                        <div style={{marginTop:"30px"}}>
                            <button type="submit" className="btn  btn-primary" style={{marginRight: "10px"}} onClick={()=>this.post()} >Crear</button>
                            <a className="btn  btn-dark" href="/dashboard">Salir</a>
                        </div>
                    </form>
                </div>
       </React.Fragment>
        );
    }
}

export default Nuevo