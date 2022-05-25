import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReuniaoService {

  private baseUrl = 'http://localhost:8080/api/v1/reunioes';

  constructor(private http: HttpClient) { }

  getReuniao(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createReuniao(Reuniao: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Reuniao);
  }

  updateReuniao(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteReuniao(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getReunioesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
