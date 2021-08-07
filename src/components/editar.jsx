import React from 'react';
import {Apiurl} from '../services/apirest';
import axios from 'axios';
import Header from '../template/Header';

class Editar extends React.Component{
    
    componentDidMount(){
        let pacienteId = this.props.match.params.id;
        let url = Apiurl +"/pacientes?id=" + pacienteId;
        axios.get(url)
        .then(response =>{
            console.log(response)
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
                    <form className="form-horizontal">
                        <div className="row">
                            <div className="col-sm-12">
                                <label className="col-md-2 control-label">Nombre</label>
                                <div className="col-md-10">
                                    <input className="form-control" name="nombre" placeholder="Nombre" type="text" />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <label className="col-md-2 control-label">Direccion</label>
                                <div className="col-md-10">
                                    <input className="form-control" name="dirreccion" placeholder="Dirreccion" type="text" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Editar