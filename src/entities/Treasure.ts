import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Treasure {
  @PrimaryColumn()
  code!: number;

  @Column({ unique: true })
  name!: string;

  @Column({ nullable: true })
  destiny!: string;

  @Column({ default: "USD" })
  currency!: string;

  @Column({ type: "real", default: 0 })
  balance!: number;

  @Column({ nullable: true })
  comment!: string;

  @Column({ type: "boolean", default: true })
  visible!: boolean;

  @Column({ default: "#000000" })
  color!: string;
}
