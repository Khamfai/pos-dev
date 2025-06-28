export interface PlansModel {
  id: number;
  name: string;
  limitUser?: number | null;
  limitBill?: number | null;
  limitDay?: number | null;
  price: number;
  createdAt?: number | null;
  updatedAt?: number | null;
}
