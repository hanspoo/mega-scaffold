import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PedidoEntity } from './PedidoEntity.entity';

@Entity()
export class CartItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => PedidoEntity, (e: PedidoEntity) => e.items)
  pedido: PedidoEntity;

  @Column()
  idItem: string;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  value: number;
}
