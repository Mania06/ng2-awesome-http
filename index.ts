export { AwesomeHttpService } from './src/awesome-http.service';
export { HttpConfig } from './src/cache/http-config.model';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AwesomeHttpService } from './src/awesome-http.service';
import { CacheService } from './src/cache/cache.service';

@NgModule({
  imports: [HttpModule],
  providers: [
    AwesomeHttpService, CacheService
  ]
})
export class AwesomeHttpModule {
}
