import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import root from '../store';
import { EffectsModule } from '@ngrx/effects';
import { RootEffects } from './effects/effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot([RootEffects]),
    StoreModule.forRoot(root),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
})
export class StoreNgModule {}
