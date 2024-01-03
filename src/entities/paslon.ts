import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Partai } from "./partai";
import { Voting } from "./voting";

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

  @Column({ nullable: true })
  votePoint: number;

  @OneToMany(() => Partai, (partai) => partai.paslon, {
    onDelete: "CASCADE"
  })
  koalisi: Partai[]

  @OneToMany(() => Voting, (voting) => voting.paslon, {
    onDelete: "CASCADE"
  })
  voting: Voting[]
}
