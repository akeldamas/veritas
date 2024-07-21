import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class InterestGroup {
  @PrimaryColumn()
  identifier: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  url: string;
}
