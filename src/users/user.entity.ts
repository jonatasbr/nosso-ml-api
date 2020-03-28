import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User {
  /**
   *
   * @param login a valid email
   * @param password not encrypted
   */
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

  /**
   *
   * @param password a plain text to compare to password encrypted in the database
   */
  isPasswordValid(password: string) {
    return bcrypt.compareSync(password, this._password);
  }
}
