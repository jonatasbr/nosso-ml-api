import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User {
  constructor(login: string, password: string) {
    this.login = login;
    this.createdAt = new Date();
    this.password = password ? password : '';
  }

  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ nullable: false, unique: true })
  login: string;

  @Column({ name: 'password', nullable: false })
  private _password: string;

  @Column({ name: 'created_at', nullable: false })
  createdAt: Date;

  private set password(plainText: string) {
    this._password = bcrypt.hashSync(plainText, bcrypt.genSaltSync());
  }
}
