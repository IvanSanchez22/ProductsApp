import { Component } from '@angular/core';
import { ProductosBaratosService } from '../services/categories/productosBaratos/productosBarados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   constructor(private productsBaratos: ProductosBaratosService){}
    products: any[] = []

    ngOnInit(){
      this.productsBaratos.getProducts().subscribe((data) => {
        console.log(data);
        this.products = data;
        console.log(this.products)
      });
    }
}
