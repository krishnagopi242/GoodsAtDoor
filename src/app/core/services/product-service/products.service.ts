import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'app/shared/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri = `http://${AppConstants.baseURL}/products`;
  constructor(private http: HttpClient, private router: Router) {}
  addProduct(ProductName, ProductDescription, ProductPrice) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj).subscribe(res => {
      console.log('Done');

      this.router.navigate(['/products/productList']);
    });
  }

  getProducts() {
    return this.http.get(`${this.uri}`);
  }

  editProduct(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this.http.post(`${this.uri}/update/${id}`, obj).subscribe(res => {
      console.log('Done');
      this.router.navigate(['/products']);
    });
  }

  deleteProduct(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
