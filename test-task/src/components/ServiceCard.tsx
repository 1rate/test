import React from 'react';
import type { Service } from '../types/types';
import './ServiceCard.css';

interface ServiceCardProps {
  service: Service;
  onAdd: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onAdd }) => {
  const handleAddClick = () => {
    onAdd(service);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU') + ' ₽';
  };

  return (
    <div className="service-card">
      <div className="service-card__content">
        <div className="service-card__header">
          <span className="service-card__category">{service.category}</span>
          <h3 className="service-card__name">{service.name}</h3>
        </div>
        
        <p className="service-card__description">{service.description}</p>
        
        <div className="service-card__footer">
          <div className="service-card__price">{formatPrice(service.price)}</div>
          <button 
            className="service-card__add-button"
            onClick={handleAddClick}
            aria-label={`Добавить ${service.name}`}
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;