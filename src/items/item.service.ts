import { Injectable } from '@nestjs/common';
import { Item } from './item.model';

@Injectable()
export class ItemService {
  private items: Item[] = [];

  getAllItems(): Item[] {
    return this.items;
  }

  createItem(name: string, description: string): Item {
    const newItem = { id: Date.now().toString(), name, description };
    this.items.push(newItem);
    return newItem;
  }
}
