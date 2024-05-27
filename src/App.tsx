import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Order } from './models';

const Navigation = lazy(() => import('./components/navigation/navigation.component'));
const Home = lazy(() => import('./components/home/home.component'));
const NewOrder = lazy(() => import('./components/new-order/new-order.component'));

const App: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (order: Order) => {
    setOrders([...orders, order]);
  };

  const deleteOrder = (index: number) => {
    setOrders(orders.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home orders={orders} deleteOrder={deleteOrder} />} />
          <Route path="/new" element={<NewOrder addOrder={addOrder} />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
