import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProduto(): Observable<Produto[]>{
    return this.http.get<Produto[]>('http://diretodaterra.herokuapp.com/produto', this.token)

  }

  postProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('http://diretodaterra.herokuapp.com/produto', produto, this.token)
  }

  putProduto(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>('http://diretodaterra.herokuapp.com/produto', produto, this.token)
  }
}
