import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Users } from "./users";

@Entity({ name: "article" })
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @CreateDateColumn()
  date: Date;

  @Column()
  img: string;

  @Column()
  description: string;

  @ManyToOne(() => Users, (users) => users.article, {
    onDelete: "CASCADE"
  })
  author: Users
}
