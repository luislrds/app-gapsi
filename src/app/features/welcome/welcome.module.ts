import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CandidateComponent } from '../candidate/components/candidate/candidate.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { VersionComponent } from '../version/components/version/version.component';
import { SuppliersModule } from '../suppliers/suppliers.module';
import { SuppliersComponent } from '../suppliers/components/suppliers/suppliers.component';

@NgModule({
  declarations: [
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    CandidateComponent,
    VersionComponent,
    SuppliersModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    SuppliersModule,
  ],
})
export class WelcomeModule { }
