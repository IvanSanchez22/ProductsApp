import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosBaratosService {

   
    constructor(private http: HttpClient) {}

    getProducts(): Observable<string[]> {
    return this.http.get<string[]>('https://api.escuelajs.co/api/v1/products/?price_min=20&price_max=120');
    }

}