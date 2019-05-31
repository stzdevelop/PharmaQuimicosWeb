import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { ProductosDetailComponent } from './productos-detail/productos-detail.component';
import { ProductosListComponent } from './productos-list/productos-list.component';

@NgModule({
  declarations: [ProductosComponent, ProductosDetailComponent, ProductosListComponent],
  imports: [
    CommonModule
  ]
})
export class ProductosModule { }
