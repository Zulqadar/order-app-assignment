import React from 'react';
import { Order } from '../../models';
import { Button, Container, Table } from 'react-bootstrap';

interface HomeProps {
    orders: Order[];
    deleteOrder: (index: number) => void;
}

const Home: React.FC<HomeProps> = ({ orders, deleteOrder }) => {
    return (
        <Container>
            <h1>Order List</h1>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Quantity</th>
                        <th>Order Description</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr>
                            <td>{(index + 1)}</td>
                            <td>{order.firstName}</td>
                            <td>{order.lastName}</td>
                            <td>{order.quantity}</td>
                            <td>{order.description}</td>
                            <td>
                                <Button onClick={() => deleteOrder(index)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Home;