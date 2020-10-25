import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { SiteFeature } from '../site-feature/site-feature.entity';


@Entity( 'site-configuration' )
export class SiteConfiguration {
    @PrimaryGeneratedColumn( {
        type: 'int',
        name: 'id',
    } )
    id: number;


    @Column( { unique: true } )
    domain: string;

    @Column()
    theme: string;

    @ManyToMany( type => SiteFeature, { cascade: true } )
    @JoinTable( {
        name: 'site_features',
        joinColumn: { name: 'site_configuration_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'site_feature_id', referencedColumnName: 'id' },
    } )
    features: SiteFeature[];
}
