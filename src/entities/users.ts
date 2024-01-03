import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "users" })
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;
  
  @Column()
  alamat: string;
  
  @Column()
  jenisKelamin: string;
  
  @Column()
  username: string;

  @Column()
  password: string;
}
