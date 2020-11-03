import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { SiteConfiguration } from '../site-configuration/site-configuration.entity';

@Entity( { name: 'feature' } )
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

    // @ManyToMany( type => SiteConfiguration )
    // @JoinTable( {
    //     name: 'site_features',
    //     joinColumn: { name: 'site_feature_id', referencedColumnName: 'id' },
    //     inverseJoinColumn: { name: 'site_configuration_id', referencedColumnName: 'id' },
    // } )
    // configurations: SiteConfiguration[];


}
