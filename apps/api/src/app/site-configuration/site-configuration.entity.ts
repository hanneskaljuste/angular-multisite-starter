import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, JoinColumn } from 'typeorm';
import { SiteFeature } from '../site-feature/site-feature.entity';


@Entity( { name: 'site' } )
export class SiteConfiguration {
    @ApiProperty()
    @PrimaryGeneratedColumn( {
        type: 'int',
        name: 'id',
    } )
    id: number;

    @ApiProperty()
    @Column( { unique: true } )
    domain: string;

    @ApiProperty()
    @Column()
    theme: string;

    @ApiProperty()
    @ManyToMany( type => SiteFeature, { cascade: true, eager: true } )
    @JoinTable( {
        name: 'site_feature',
        joinColumn: { name: 'site_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'feature_id', referencedColumnName: 'id' },
    } )
    @JoinColumn( { name: 'feature_id' } )
    features: SiteFeature[];

    // @ManyToMany( type => SiteFeature, feature => feature.configurations, {
    //     cascade: true
    // } )
    // @JoinTable( {
    //     name: 'site_configuration_features',
    //     joinColumn: {
    //         name: 'siteConfigurationId',
    //         referencedColumnName: 'id',
    //     },
    //     inverseJoinColumn: {
    //         name: 'siteFeatureId',
    //         referencedColumnName: 'id',
    //     },
    // } )
    // features: SiteFeature[];

}
