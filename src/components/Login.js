import { Button, Form, Image } from 'react-bootstrap';
import React, { Component } from 'react';
import logo from '../assets/logo.png';



// export default function Login(){
//     // Here we are using hooks
//     const [ username, setUsername] = useState('');
//     const [ password, setPassword] = useState('');

//     function ValidateForm(){
//         return email.length > 0 && password.length > 0;
//     }

//     function handleSubmit(event){
//         event.preventDefault();
//     }

//     return(
//         <div className="Login">
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group size="lg" controlId="email">
//                     <Form.Label>Email</Form.Label>
//                     <Form.control
//                         type="text"
//                         value={username}
//                         onChange={(e)=> setUsername(e.target.value)}
//                     />
//                 </Form.Group>
//                 <Form.Group size="lg" controlId="password">
//                     <Form.label>Password</Form.label>
//                     <Form.Control
//                     type="password"
//                     value={password}
//                     onChange={(e)=> setPassword(e.target.value)}
//                     />
//                 </Form.Group>
//                 <Button block size="lg" type="submit" disabled={!validateForm()}>
//                     Login
//                 </Button>
//             </Form>
//         </div>
//     )
// }

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'ryan',
            password:'sacatani'
        };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    //this.validateForm = this.validateForm.bind(this);

    }  

    handleChangeUsername(event){
        console.log(event.target.value);
        this.setState({username: event.target.value});
    }

    handleChangePassword(event){
        console.log(event.target.value);

        this.setState({ password: event.target.value});
    }

    handleSubmit(event){
        console.log('username: ', this.state.username);
        console.log('password: ', this.state.password);
        alert('A login form was submitted by ' + this.state.username);
        event.preventDefault();    
    }

    // ValidateForm(event){
    //     return username.length > 0 && password.length > 0;
    // }


    render(){
        return(
      <div>
            <Form >
                <Image src={logo} alt="Logo" width="330px" />
                <Form.Group controlId="loginUsername" >
                    <Form.Control 
                    type="text" 
                    placeholder="username" 
                    value={this.state.username} 
                    onChange={this.handleChangeUsername}/>
                    <Form.Text className="text-muted"/>
                </Form.Group>

                <Form.Group controlId="loginPassword" width="330px">
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={this.state.password} 
                    onChange={this.handleChangePassword} />
                    <Form.Text className="text-muted"/>
                </Form.Group>

                <Button onClick={this.handleSubmit} variant="primary" type="submit" >
                    Sign in
                </Button>
            </Form>
        </div>  
        );       
    }
}


export default Login;