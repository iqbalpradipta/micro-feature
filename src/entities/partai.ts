import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Paslon } from "./paslon";

@Entity({ name: "partai" })
export class Partai {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  ketum: string;
  
  @Column()
  visiMisi: string;
  
  @Column()
  alamat: string;

  @Column()
  img: string;

  @ManyToOne(() => Paslon, (paslon) => paslon.koalisi, {
    onDelete: "CASCADE"
  })
  paslon: Paslon
}
