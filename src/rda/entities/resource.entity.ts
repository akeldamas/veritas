import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Resource {
  /**
   * Identifier Properties
   *
   * Note: Not sure if all are needed?
   */

  @Column()
  uuid: string;

  @Column()
  uuid_link: string;

  @Column()
  uuid_uri_type: string;

  @PrimaryColumn()
  uuid_rda: string;

  @Column()
  title: string;

  @Column()
  notes: string;

  /**
   * Not certain what the difference is between `type` and `dc_type`.
   */
  @Column()
  type: string;

  @Column()
  primary_uri: string;

  @Column()
  secondary_uri: string;

  @Column()
  card_url: string;

  @Column()
  source: string;

  @Column()
  pid_lod_type: string;

  @Column()
  pid_lod: string;

  /**
   * Dublin Core Properties
   */
  @Column()
  dc_date: string;

  @Column()
  dc_description: string;

  @Column()
  dc_language: string;

  @Column()
  dc_type: string;
}
