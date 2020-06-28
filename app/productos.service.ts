import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get(environment.endpoint + "/posts")

  }

  getProductoById(id) {
    return this.http.get(environment.endpoint + "/posts/"+id)

  }


}
