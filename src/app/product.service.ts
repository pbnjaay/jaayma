import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://localhost:1996/api';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Product[]>(this.baseUrl + '/products/')
    .pipe(
      map(resp => {
        const p = [];
        for ( const id in resp) {
          if (resp.hasOwnProperty(id)) {
            p.push({...resp[id], key: id});
          }
        }
        return p;
      })
    );
  }

  getProduct(key: string) {
    return this.http.get<Product>(this.baseUrl + '/products/' +  key);
  }
}
