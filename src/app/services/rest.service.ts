import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private readonly API_BASE_URL = 'https://';

  constructor(private httpClient: HttpClient) {}

  private handleError(error: any): Observable<never> {
    console.error('API Error:', error);
    return throwError(() => error);
  }

  // JSON response için
  get<T = any>(url: string, params?: any): Observable<T> {
    return this.httpClient.get<T>(`${this.API_BASE_URL}${url}`, { params })
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Blob response için
  getBlob(url: string): Observable<Blob> {
    return this.httpClient.get(`${this.API_BASE_URL}${url}`, { responseType: 'blob' })
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Text response için
  getText(url: string): Observable<string> {
    return this.httpClient.get(`${this.API_BASE_URL}${url}`, { responseType: 'text' })
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // ArrayBuffer response için
  getArrayBuffer(url: string): Observable<ArrayBuffer> {
    return this.httpClient.get(`${this.API_BASE_URL}${url}`, { responseType: 'arraybuffer' })
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.httpClient.post<T>(`${this.API_BASE_URL}${url}`, body)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
