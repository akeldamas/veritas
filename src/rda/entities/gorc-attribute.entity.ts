import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class GORCAttribute {
  @PrimaryColumn()
  identifier: string;

  @Column()
  title: string;

  @Column()
  description: string;
}
