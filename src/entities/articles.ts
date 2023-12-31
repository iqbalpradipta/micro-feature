import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity({ name: "article" })
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @CreateDateColumn()
  date: Date;

  @Column({ nullable: true })
  img: string;

  @Column()
  author: string;

  @Column()
  description: string;
}
