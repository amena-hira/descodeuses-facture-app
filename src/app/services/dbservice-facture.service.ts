import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facture } from '../model/facture.model';

@Injectable({
  providedIn: 'root'
})
export class DBServiceFactureService {
  private apiUrl = "api/facture";

  constructor(private http:HttpClient) { }

  addFacture(item:Facture){
    return this.http.post<Facture>(this.apiUrl, item);
  }

  getFactures(){
    return this.http.get<Facture[]>(this.apiUrl)
  }

  getFacture(id:number){
    return this.http.get<Facture>(this.apiUrl+ '/' + id)
  }
  
  updateFacture(facture:Facture){
    return this.http.put<Facture>(this.apiUrl+'/'+facture.id, facture)
  }

  deleteFacture(id:number){
    return this.http.delete<Facture>(this.apiUrl+'/'+id)
  }
}
