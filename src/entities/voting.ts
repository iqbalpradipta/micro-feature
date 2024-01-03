import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Paslon } from "./paslon";
import { Users } from "./users";

@Entity({ name: "voting" })
export class Voting {
  @PrimaryGeneratedColumn()
  id: number;
  

  @ManyToOne(() => Paslon, (paslon) => paslon.voting, {
    onDelete: 'CASCADE'
  })
  paslon: Paslon

  @ManyToOne(() => Users, (users) => users.voting, {
    onDelete: 'CASCADE'
  })
  users: Users
}