import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Voting } from "./voting";

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

  @Column({ nullable: true })
  voted: boolean;

  @OneToMany(() => Voting, (voting) => voting.users, {
    onDelete: "CASCADE"
  })
  voting: Voting[]
}
