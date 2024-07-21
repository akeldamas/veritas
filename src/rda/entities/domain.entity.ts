import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class Domain {
  @PrimaryColumn()
  identifier: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  description_source: string;

  @Column()
  taxonomy_parent: string;

  @Column()
  taxonomy_terms: string;

  @Column()
  parent_identifier: string;

  @Column()
  url: string;
}
