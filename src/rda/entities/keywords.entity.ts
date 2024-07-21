import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class Keyword {
  @PrimaryGeneratedColumn('uuid')
  identifier: string;

  @Column()
  title: string;

  @Column()
  related_to_group: string;

  @Column()
  created_by: string;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;
}
