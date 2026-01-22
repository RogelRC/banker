import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import { Treasure } from "./Treasure";

// Entidad para Transferencias entre tesorerías
@Entity()
export class Transfer {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "date" })
  date!: Date;

  @ManyToOne(() => Treasure, { nullable: false })
  @JoinColumn({ name: "source_treasure_code" })
  sourceTreasure!: Treasure;

  @Column()
  source_treasure_code!: number;

  @ManyToOne(() => Treasure, { nullable: false })
  @JoinColumn({ name: "destination_treasure_code" })
  destinationTreasure!: Treasure;

  @Column()
  destination_treasure_code!: number;

  @Column({ type: "real" })
  amount!: number;

  @Column({ nullable: true })
  description!: string;

  @CreateDateColumn()
  created_at!: Date;
}
