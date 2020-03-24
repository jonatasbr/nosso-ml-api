import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Optional } from '@nestjs/common';

@Entity()
export class Category {
  /**
   *
   * @param name
   * @param category
   */
  constructor(name: string, category?: Category) {
    this.name = name;
    this.parent = category ? category : null;
  }

  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ nullable: false, unique: true })
  readonly name: string;

  @ManyToOne(type => Category)
  @JoinColumn({ name: 'category_id' })
  @Optional()
  readonly parent: Category;
}
