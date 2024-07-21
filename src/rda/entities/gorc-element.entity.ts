import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class GORCElement {
  @PrimaryColumn()
  identifier: string;

  @Column()
  title: string;

  @Column()
  description: string;
}
