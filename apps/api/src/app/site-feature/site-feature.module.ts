import { Module } from '@nestjs/common';
import { SiteFeatureService } from './site-feature.service';
import { SiteFeatureController } from './site-feature.controller';

@Module({
  providers: [SiteFeatureService],
  controllers: [SiteFeatureController]
})
export class SiteFeatureModule {}
