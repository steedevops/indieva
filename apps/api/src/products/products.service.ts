import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service.js';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll() {
    const result = await this.databaseService.query(`
      SELECT
        id,
        name,
        price::float8 AS price
      FROM products
      ORDER BY id;
    `);

    return result.rows;
  }
}