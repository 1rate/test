
export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

export type SelectedService = Service & { quantity: number };