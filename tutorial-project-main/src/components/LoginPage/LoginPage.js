import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import "./LoginPage.css"
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [data,setData]=useState("")
    const navigate = useNavigate()
    
    async function handleSubmit(event) {
        event.preventDefault();
        await fetch(`./data/data.json`)
          .then(response => response.json())
          .then(data => {
            setData(data.data)
          })
    
          .catch(() => console.log("error"))
      
        if(data){
            for (let key in data) {
            if( data[key].emailId === email){
                if( data[key].password === password){
                    if( data[key].role === "Admin"){
                        navigate("../adminDashboard", { replace: true });
                    }
                    else if( data[key].role === "Student"){
                        navigate("../studentDashboard", { replace: true });
                    }
                }
            }
        }
    }
        
    }

    useEffect(() => {
        fetch(`./data/data.json`)
          .then(response => response.json())
          .then(data => {
            setData(data.data)
          })
    
          .catch(() => console.log("error"))
      }, [])
    return (
        <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Welcome</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} required/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
                            </Form.Group>

                            <Form.Label className="forgotPassword"><a href='#'>Forgot password</a></Form.Label>

                            <Button variant="success btn-block" type="submit">
                                Login
                            </Button>

                            <Form.Label className="signup">Don't have an account?&nbsp;<a href='/Register'>Signup</a></Form.Label>
        
                            
                        </Form >
                    </Col>
                </Row>
                
            </Container>

            
        </>
    );
};

export default LoginPage;