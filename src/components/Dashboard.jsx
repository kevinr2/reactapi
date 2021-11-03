import React from 'react';
import Header from '../template/Header';
import {Apiurl } from '../services/apirest';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


   
class Dashboard extends React.Component{

    state={
        pacientes:[]
    }

    clickPaceinte(id){
        this.props.history.push("/editar/" + id);
    }

    componentDidMount(){
        let url = Apiurl + "pacientes?page=1";
        axios.get(url)
        .then(response=>{
            this.setState({
                pacientes: response.data
            })
        })
    }

    render(){
        return(
            <React.Fragment>
                 <Header></Header>
                 <div className="container">
                 <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">DNI</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.pacientes.map((value,index)=>{
                            return(
                                <tr key={index} onClick={()=>this.clickPaceinte(value.PacienteId)}> 
                                <th >{value.PacienteId}</th>
                                <td>{value.Nombre}</td>
                                 <td>{value.DNI}</td>
                                 <td>{value.Telefono}</td>
                                 <td>{value.Correo}</td>
                                 </tr>

                            )
                        })}
                    </tbody>
                    </table>
                    <Link to="/nuevo" className="btn btn-success">Nuevo</Link>
                 </div>
                
            </React.Fragment>
        );
    }
}

export default Dashboard