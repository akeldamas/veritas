import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class WorkingGroup {
  @PrimaryColumn()
  identifier: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  url: string;
}
