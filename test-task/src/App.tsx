import React, { useState } from 'react';
import Layout from './components/Layout';
import ServiceCard from './components/ServiceCard';
import type { Service, SelectedService } from './types/types';
import './App.css';
import { mockServices } from './data/mock';
import SelectedServices from './components/SelectedService';

const App: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);

  const handleAddService = (service: Service) => {
    setSelectedServices(prev => {
      const existingService = prev.find(s => s.id === service.id);
      
      if (existingService) {
        return prev.map(s =>
          s.id === service.id
            ? { ...s, quantity: s.quantity + 1 }
            : s
        );
      } else {
        return [...prev, { ...service, quantity: 1 }];
      }
    });
  };

  const handleOrder = () => {
    alert('Спасибо за заказ! С вами свяжется наш специалист для подтверждения.');
    // В реальном приложении здесь была бы логика оформления заказа
    setSelectedServices([]); // Очищаем корзину после заказа
  };

  return (
    <Layout>
      <div className="app">
        <div className="services-section">
          <h2 className="section-title">Доступные услуги</h2>
          <div className="services-grid">
            {mockServices.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                onAdd={handleAddService}
              />
            ))}
          </div>
        </div>

        <div className="summary-section">
          <SelectedServices
            selectedServices={selectedServices}
            onOrder={handleOrder}
          />
        </div>
      </div>
    </Layout>
  );
};

export default App;