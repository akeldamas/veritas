import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Pathway {
  @PrimaryColumn()
  identifier: string;

  @Column()
  title: string;

  @Column()
  description: string;
}
