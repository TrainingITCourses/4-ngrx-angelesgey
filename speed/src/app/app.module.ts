import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFilterComponent } from './search-filter/search-filter.component';

import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSelectModule,
  MatCardModule
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { LaunchEffects } from './reducers/launch/launch.effects';
import { StatusEffects } from './reducers/status/status.effects';
import { MissionEffects } from './reducers/mission/mission.effects';
import { AgencyEffects } from './reducers/agency/agency.effects';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultComponent,
    SearchFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([LaunchEffects, StatusEffects, MissionEffects, AgencyEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
