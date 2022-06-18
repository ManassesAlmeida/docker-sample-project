import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = `${environment.url}/products`

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(this.url);
  }

  save(product: any): Observable<any> {
    return this.http.post(this.url, product);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
