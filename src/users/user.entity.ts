import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @IsEmail()
  @Column({ nullable: false })
  login: string;

  @Column({ name: 'password_hash', nullable: false })
  passwordHash: string;

  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @Column({ name: 'created_at', nullable: false })
  createdAt: Date;

  @Column({ name: 'updated_at', nullable: false })
  updatedAt: Date;
}
