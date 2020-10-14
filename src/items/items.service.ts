import { Injectable } from '@nestjs/common';
import { Item } from '../item';
import { Items } from '../items';
import { Transaction } from '../transaction';

@Injectable()
export class ItemsService {
  private readonly items: Items = {
    '1': {
      id: '001',
      merchantId: '001',
      name: 'Alfred Jones',
    },
    '2': {
      id: '002',
      merchantId: '001',
      name: 'Sally Brian',
    },
    '3': {
      id: '003',
      merchantId: '001',
      name: 'Jeffery Shorts',
    },
    '4': {
      id: '004',
      merchantId: '002',
      name: 'Hugo Boss',
    },
    '5': {
      id: '005',
      merchantId: '002',
      name: 'Paul Notpete',
    },
    '6': {
      id: '006',
      merchantId: '002',
      name: 'Maggy Spencer',
    },
    '7': {
      id: '007',
      merchantId: '003',
      name: 'Dave Telle',
    },
    '8': {
      id: '008',
      merchantId: '003',
      name: 'Simon Pegstine',
    },
    '9': {
      id: '009',
      merchantId: '003',
      name: 'Andrew Dahoot',
    },
  };

  findAll(): Items {
    return this.items;
  }

  create(newItem: Item): void {
    const id =
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15);
    this.items[id] = {
      ...newItem,
      id,
    };
  }

  find(id: string): Item {
    const record: Item = this.items[id];

    if (record) {
      return record;
    }

    throw new Error('No record found');
  }

  update(updatedItem: Item): void {
    if (this.items[updatedItem.id]) {
      this.items[updatedItem.id] = updatedItem;
      return;
    }

    throw new Error('No record found to update');
  }

  delete(id: string): void {
    const record: Item = this.items[id];

    if (record) {
      delete this.items[id];
      return;
    }

    throw new Error('No record found to delete');
  }
}
