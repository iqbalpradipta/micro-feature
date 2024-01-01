import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "paslon" })
export class Paslon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  nomorUrut: number;
  
  @Column()
  visiMisi: string;
  
  @Column()
  img: string;
}
