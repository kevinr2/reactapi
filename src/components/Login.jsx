import React from 'react';
//css
import  '../assets/css/login.css';
//icon
import Logo from '../assets/img/logo.png'
//servicios
import {Apiurl} from '../services/apirest';
//librearias
import axios from 'axios';

class Login extends React.Component{

    constructor(props){
        super(props);
    }

    state={
        form:{
            "usuario": "",
            "password":""
        },
        error:false,
        errorMsg:""
    }

    manejadorSubmit = e =>{
        e.preventDefault();
    }
    manejadorBoton=()=>{
        let url = Apiurl + "auth";
        console.log(this.state.form)
        axios.post(url, this.state.form)
        .then( response =>{
            if (response.data.status === "ok") {
                localStorage.setItem("token", response.data.result.token);
                this.props.history.push("/dashboard");

            }else{
                
                this.setState({
                    error: true,
                    errorMsg: response.data.result.error_msg
                })
            }
        })
        .catch(error =>{
            console.log(error);
            this.setState({
                error:true,
                errorMsg: "Error al conectar con el api"
            })
          });
    }

    manejadorChange= async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
       
        
    }
    

    render(){
        return(
        <React.Fragment>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    
                   <br/>
                
                    <div className="fadeIn first">
                    <img src={Logo} width="100" height="150" alt="User Icon" />
                    </div>

                    
                    <form onSubmit={ this.manejadorSubmit}> 
                    <input type="text" id="login" className="fadeIn second" name="usuario" placeholder="usuario" onChange={ this.manejadorChange }/>
                    <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" onChange={ this.manejadorChange }/>
                    <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.manejadorBoton} />
                    </form>

                {this.state.error === true &&
                    <div className="alert alert-danger" role="alert">
                         {this.state.errorMsg}
                    </div>
                }
                </div>
            </div>
        </React.Fragment>
        );
    }
}

export default Login