import React, { useRef } from "react";
import { Form, Card, Button } from "react-bootstrap";

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    return (
        <div className="signup">
            <Card>
                <Card.Body>
                    <h2 className="w-100 text-center mb-2">Sign Up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" required ref={emailRef} />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="pasword" required ref={passwordRef} />
                        </Form.Group>
                        <Form.Group id="confirm-password">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" required ref={confirmPasswordRef} />
                        </Form.Group>
                        <Button className="w-100 my-2" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <h2 className="w-100 text-center mt-2">Already have an account ? Login </h2>
        </div>
    );
}

export default Signup;
