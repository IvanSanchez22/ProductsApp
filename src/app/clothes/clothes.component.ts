import { Component } from '@angular/core';
import { ProductosBaratosService } from '../services/productosBaratosHome/productosBarados.service';
import { ClothesService } from '../services/clothes/clothes.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent {

  filtros =  [
    '100-200',
    '200-300',
    '300-400',
    '400-500',
    '500-600',
    '600-700',
    '700-800',
  ]



  selectedPrecio: string = '';
  constructor(private productsClothes: ClothesService ){}
    products: any[] = []

    ngOnInit(){
      this.productsClothes.getAllProducts().subscribe((data) => {
        console.log(data);
        this.products = data;
        console.log(this.products)
      });
    }

    filtrarFirst(){
      this.productsClothes.getFirsProducts().subscribe((data) => {
        console.log(data);
        this.products = data;
        console.log(this.products)
      });
    }

   
 filtrarProducts() {
    switch(this.selectedPrecio) {
      case '100-200': {
          this.productsClothes.getFirsProducts().subscribe((data) => {
          console.log(data);
          this.products = data;
          console.log(this.products);
        });
          break;
      }
      case '200-300': {
          this.productsClothes.getSecondProducts().subscribe((data) => {
          console.log(data);
          this.products = data;
          console.log(this.products);
        });
          break;
      }
      case '300-400': {
          this.productsClothes.getThirdProducts().subscribe((data) => {
          console.log(data);
          this.products = data;
          console.log(this.products);
        });
          break;
      }
      case '400-500': {
          this.productsClothes.getFourthProducts().subscribe((data) => {
          console.log(data);
          this.products = data;
          console.log(this.products);
        });
          break;
      }
      case '500-600': {
          this.productsClothes.getFifthProducts().subscribe((data) => {
          console.log(data);
          this.products = data;
          console.log(this.products);
        });
          break;
      }
      case '600-700': {
          this.productsClothes.getSixthProducts().subscribe((data) => {
          console.log(data);
          this.products = data;
          console.log(this.products);
        });
          break;
      }
      case '700-800': {
          this.productsClothes.getSeventhProducts().subscribe((data) => {
          console.log(data);
          this.products = data;
          console.log(this.products);
        });
          break;
      }
      default: {
          this.productsClothes.getAllProducts().subscribe((data) => {
          console.log(data);
          this.products = data;
          console.log(this.products);
        });
          break;
      }
}
}
}

