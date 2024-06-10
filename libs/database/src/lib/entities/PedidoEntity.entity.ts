import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CartItemEntity } from './CartItemEntity.entity';

@Entity()
export class PedidoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'bigint' })
  createdAt: number;

  @Column()
  estado: string;

  @Column()
  name: string;

  @Column()
  coments: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @OneToMany(() => CartItemEntity, (u) => u.pedido, { cascade: true })
  items: CartItemEntity[];
}
