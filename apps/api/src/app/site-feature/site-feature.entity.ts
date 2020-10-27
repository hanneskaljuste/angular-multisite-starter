import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SiteFeature {
    @PrimaryGeneratedColumn( {
        type: 'int',
        name: 'id',
    } )
    id: number;

    @Column( 'varchar', {
        nullable: false,
        name: 'name',
        unique: true
    } )
    name: string;
}
