import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Order } from '../../models';
import { Button, Container, Form } from 'react-bootstrap';

interface NewOrderProps {
    addOrder: (order: Order) => void;
}

const NewOrder: React.FC<NewOrderProps> = ({ addOrder }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (lastName && description && quantity >= 1 && quantity <= 20) {
            addOrder({ firstName, lastName, description, quantity });
            navigate('/');
        }
    };

    return (
        <Container>
            <h1>New Order</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name (Optional)</Form.Label>
                    <Form.Control type="text" value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        maxLength={20} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        maxLength={20}
                        required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        min={1}
                        max={20}
                        required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Order Description</Form.Label>
                    <Form.Control as="textarea" rows={3} value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength={100}
                        required />
                </Form.Group>

                <Button type="submit" disabled={!lastName || !description || quantity < 1 || quantity > 20}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default NewOrder;
