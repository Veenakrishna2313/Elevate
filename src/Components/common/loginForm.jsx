import React from 'react';
import Joi from 'joi-browser';
import Form from './form';
class LoginForm extends Form {
state={
  data:{username:'', password:""},
  errors:{

  }
};

schema={
  username:Joi.string().required().label("Username"),
  password:Joi.string().required().label("Password")
}
  doSubmit=()=>{
    //call the server
      console.log(" form submitted")
  }


  render() { 
   
    return <div> 
    <h1 className="mb-3">Login </h1>
    <form onSubmit={this.handleSubmit}>
     { this.renderInput("username", "Username")}
     { this.renderInput("password", "Password", "password")} 
      {this.renderButton("login")}
      
    </form>

    </div>;
  }
}
 
export default LoginForm;