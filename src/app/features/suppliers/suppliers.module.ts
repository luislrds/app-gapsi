import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersService } from './services/suppliers.service';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { SuppliersRoutingModule } from './suppliers-routing.module';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import { SupplierFormComponent } from './components/supplier-form/supplier-form.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatSnackBarModule} from '@angular/material/snack-bar'; 

@NgModule({
  declarations: [
   SuppliersComponent,
   SupplierFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SuppliersRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [
    SuppliersService
  ],
  exports: [
    SuppliersComponent
  ]
})
export class SuppliersModule { }
