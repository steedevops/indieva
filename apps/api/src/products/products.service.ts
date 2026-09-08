import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  findAll() {
    return [
      { id: 1, name: 'Tasse en céramique', price: 32 },
      { id: 2, name: 'Sac en lin', price: 45 },
    ];
  }
}
