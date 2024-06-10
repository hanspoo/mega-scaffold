import { DataSource } from 'typeorm';
import { CartItemEntity } from './entities/CartItemEntity.entity';
import { PedidoEntity } from './entities/PedidoEntity.entity';

export const postgresDataSource = new DataSource({
  type: 'postgres',
  host: process.env.PG_HOST || 'localhost',
  port: 5432,
  username: process.env.PG_USER || 'freecomm',
  password: process.env.PG_PASS || '123456',
  database: process.env.PG_DATABASE || 'freecomm',
  synchronize: true,
  logging: ['query', 'error', 'schema'],
  entities: [CartItemEntity, PedidoEntity],
});
