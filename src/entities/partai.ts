import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
