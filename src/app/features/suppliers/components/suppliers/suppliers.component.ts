import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SupplierFormComponent } from '../supplier-form/supplier-form.component';
import Swal from 'sweetalert2';
import { SuppliersService } from '../../services/suppliers.service';
import { ISupplier } from '../../models/supplier.model';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.sass']
})
export class SuppliersComponent implements OnInit {

  public loading = false;
  public displayedColumns: string[] = ['name', 'business_name', 'address', 'action'];
  public dataSource: ISupplier[] = [];
  public limit: number = 10;
  public offset: number = 1;
  public length: number = 0;
  public pageIndex: number = 0;

  constructor(public dialog: MatDialog, private suppliersService: SuppliersService) { }

  ngOnInit(): void {
    this.getSuppliers()
  }

  private async getSuppliers(params: { limit: number, offset: number } = { limit: 10, offset: 1 }) {
    this.loading = true;
    const { data, limit, offset, length } = await this.suppliersService.get(params).toPromise()
    this.limit = limit;
    this.offset = offset;
    this.length = length;
    this.dataSource = data
    this.loading = false;
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(SupplierFormComponent, { width: '400px' });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getSuppliers();
      }

    });
  }

  public confirmAction(id: string) {
    Swal.fire({
      title: "¿Deseas eliminar a este proveedor?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Si",
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await this.suppliersService.delete(id).toPromise()
        Swal.fire("Se eliminó correctamente!", "", "success");
        this.getSuppliers();
      }
    });
  }

  public onPageFired(event: any) {
    const { pageSize, pageIndex } = event
    this.pageIndex = pageIndex
    const params = { limit: pageSize, offset: pageIndex + 1 }
    this.getSuppliers(params)
  }
}
