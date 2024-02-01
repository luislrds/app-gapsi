import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuppliersService } from '../../services/suppliers.service';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.sass']
})
export class SupplierFormComponent implements OnInit {

  public form: UntypedFormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    business_name: ['', Validators.required],
    address: [
      '',
      [
        Validators.required,
      ],
    ],
  });

  constructor(private formBuilder: UntypedFormBuilder,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<SupplierFormComponent>,
    private suppliersService: SuppliersService) { }

  ngOnInit(): void { }

  public async save() {
    if (this.form.valid) {
      try {
        const { data } = await this.suppliersService.post(this.form.getRawValue()).toPromise()
        this.dialogRef.close(true);
        const message = 'El proveedor se agrego correctamente'
        this.openSnackBar(message)
      } catch (error) {
        this.openSnackBar('Hubo un error al agregar un nuevo proveedor')
      }
    }
  }

  public cancel() {
    this.dialogRef.close();
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', { duration: 3000 });
  }
}

