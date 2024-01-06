import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Voting } from "./voting";
import { Article } from "./articles";

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

  @Column({type: 'simple-array'})
  roles: string[];

  @Column({ nullable: true })
  voted: boolean;

  @OneToMany(() => Voting, (voting) => voting.users, {
    onDelete: "CASCADE"
  })
  voting: Voting[]

  @OneToMany(() => Article, (article) => article.author, {
    onDelete: "CASCADE"
  })
  article: Article[]
}
