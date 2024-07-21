import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class ResourceType {
  @PrimaryColumn()
  identifier: string;

  @Column()
  title: string;

  @Column()
  description: string;
}
