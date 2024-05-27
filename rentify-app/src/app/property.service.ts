import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from './property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private baseUrl = 'http://localhost:8080/api/properties';

  constructor(private http: HttpClient) { }

  postProperty(property: Property): Observable<Property> {
    return this.http.post<Property>(this.baseUrl, property);
  }

  getPropertiesBySeller(userId: number): Observable<Property[]> {
    return this.http.get<Property[]>(`${this.baseUrl}/seller/${userId}`);
  }

  getAllProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.baseUrl);
  }

  deleteProperty(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  updateProperty(id: number, property: Property): Observable<Property> {
    return this.http.put<Property>(`${this.baseUrl}/${id}`, property);
  }

  getPropertyById(id: number) {
    return this.http.get<Property>(`${this.baseUrl}/property/${id}`);
  }
}
