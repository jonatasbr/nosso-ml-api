import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User {
  constructor(_login: string, _password: string) {
    (this.login = _login), (this.password = _password);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  login: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'created_at', nullable: false })
  createdAt: Date;

  @BeforeInsert()
  async modifyFields() {
    this.createdAt = new Date();
    this.password = await bcrypt.hash(this.password, 8);
  }
}
