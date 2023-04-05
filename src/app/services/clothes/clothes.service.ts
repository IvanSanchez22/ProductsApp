import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

    constructor(private http: HttpClient) {}

    getAllProducts(): Observable<string[]> {
    return this.http.get<string[]>('https://api.escuelajs.co/api/v1/products/?categoryId=1');
    }

    getFirsProducts(): Observable<string[]> {
        return this.http.get<string[]>('https://api.escuelajs.co/api/v1/products/?price_min=100&price_max=200&categoryId=1');
    }

    getSecondProducts(): Observable<string[]> {
        return this.http.get<string[]>('https://api.escuelajs.co/api/v1/products/?price_min=200&price_max=300&categoryId=1');
    }

    getThirdProducts(): Observable<string[]> {
        return this.http.get<string[]>('https://api.escuelajs.co/api/v1/products/?price_min=300&price_max=400&categoryId=1');
    }

    getFourthProducts(): Observable<string[]> {
        return this.http.get<string[]>('https://api.escuelajs.co/api/v1/products/?price_min=400&price_max=500&categoryId=1');
    }

    getFifthProducts(): Observable<string[]> {
        return this.http.get<string[]>('https://api.escuelajs.co/api/v1/products/?price_min=500&price_max=600&categoryId=1');
    }

    getSixthProducts(): Observable<string[]> {
        return this.http.get<string[]>('https://api.escuelajs.co/api/v1/products/?price_min=600&price_max=700&categoryId=1');
    }

    getSeventhProducts(): Observable<string[]> {
        return this.http.get<string[]>('https://api.escuelajs.co/api/v1/products/?price_min=700&price_max=800&categoryId=1');
    }

    

}