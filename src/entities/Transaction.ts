import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import { Treasure } from "./Treasure";

// Entidad base para operaciones de Ingreso y Salida
@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "date" })
  date!: Date;

  @Column({ type: "varchar", length: 20 })
  type!: "INCOME" | "EXPENSE"; // Ingreso o Salida

  @ManyToOne(() => Treasure, { nullable: false })
  @JoinColumn({ name: "treasure_code" })
  treasure!: Treasure;

  @Column()
  treasure_code!: number;

  @Column({ type: "real" })
  amount!: number;

  @Column({ nullable: true })
  description!: string;

  @CreateDateColumn()
  created_at!: Date;
}
