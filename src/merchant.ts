import { Transaction } from './transaction';

export class Merchant {
  readonly id: string;
  readonly name: string;
  readonly isTrading: boolean;
  readonly currency: string;
  readonly transactions: Transaction[];
}
