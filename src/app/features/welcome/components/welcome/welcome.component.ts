import { Compiler, Component, HostListener, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('supplierListContainer', { read: ViewContainerRef })
  supplierListContainer: ViewContainerRef | undefined;

  @HostListener("window:scroll", ["$event"])
  onScroll() {
    let max = document.documentElement.scrollHeight;
    const supplierListContainerPos =
    this.supplierListContainer?.element.nativeElement.offsetTop || 0;    
    if (supplierListContainerPos === max) {
      this.loadProductListContainer()
    }
  }

  public title = 'e-Commerce Gapsi'
  constructor(private compiler: Compiler) { }

  ngOnInit(): void {
  }

  private loadProductListContainer() {
    import('../../../suppliers/suppliers.module').then(({ SuppliersModule }) => {
      const factory: any = this.compiler
        .compileModuleAndAllComponentsSync(SuppliersModule)
        .componentFactories.find(
          (f) => f.componentType.name == 'SuppliersComponent'
        );
        this.supplierListContainer?.createComponent(factory);
    });
  }

}
