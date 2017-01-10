import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AwesomeHttpService } from './awesome-http.service';
export { AwesomeHttpService } from './awesome-http.service';
export { HttpConfig } from './cache/http-config.model';

import { CacheService } from './cache/cache.service';

@NgModule({
  imports: [CommonModule, HttpModule]
})
export class AwesomeHttpModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AwesomeHttpModule,
      providers: [
        AwesomeHttpService, CacheService
      ]
    };
  }
}
