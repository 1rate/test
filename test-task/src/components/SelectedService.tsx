import React from 'react';
import type { SelectedService } from '../types/types';
import './SelectedService.css';

interface SelectedServicesProps {
  selectedServices: SelectedService[];
  onOrder: () => void;
}

const SelectedServices: React.FC<SelectedServicesProps> = ({ 
  selectedServices, 
  onOrder 
}) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU') + ' ₽';
  };

  const calculateTotal = () => {
    return selectedServices.reduce(
      (total, service) => total + (service.price * service.quantity), 
      0
    );
  };

  const totalAmount = calculateTotal();

  if (selectedServices.length === 0) {
    return (
      <div className="selected-services empty">
        <div className="empty-state">
          <svg 
            width="64" 
            height="64" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <h3>Выберите услуги</h3>
          <p>Добавьте услуги из списка выше</p>
        </div>
      </div>
    );
  }

  return (
    <div className="selected-services">
      <div className="selected-services__header">
        <h2 className="selected-services__title">Выбранные услуги</h2>
        <div className="selected-services__count">
          {selectedServices.length} {selectedServices.length === 1 ? 'услуга' : 
           selectedServices.length < 5 ? 'услуги' : 'услуг'}
        </div>
      </div>

      <div className="selected-services__list">
        {selectedServices.map((service) => (
          <div key={service.id} className="selected-service-item">
            <div className="selected-service-item__info">
              <div className="selected-service-item__name">
                {service.name}
                {service.quantity > 1 && (
                  <span className="selected-service-item__quantity">
                    ×{service.quantity}
                  </span>
                )}
              </div>
              <div className="selected-service-item__price">
                {formatPrice(service.price * service.quantity)}
              </div>
            </div>
            <div className="selected-service-item__description">
              {service.description}
            </div>
          </div>
        ))}
      </div>

      <div className="selected-services__total">
        <div className="total-row">
          <span>Итого:</span>
          <span className="total-amount">{formatPrice(totalAmount)}</span>
        </div>
      </div>

      <button 
        className="selected-services__order-button"
        onClick={onOrder}
      >
        Оформить заказ
      </button>

      <p className="selected-services__note">
        После нажатия кнопки «Оформить заказ» с вами свяжется наш специалист
      </p>
    </div>
  );
};

export default SelectedServices;