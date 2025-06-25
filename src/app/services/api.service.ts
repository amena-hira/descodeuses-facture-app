import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements InMemoryDbService {
  facturesList = [
    { id: 1, designation: 'Banane', quantite: 4, prixUnitaire: 1 },
    { id: 2, designation: 'Pomme de terre', quantite: 2, prixUnitaire: 2.4 },
    { id: 3, designation: 'Pomme', quantite: 10, prixUnitaire: 2.5 },
    { id: 4, designation: 'Boeuf', quantite: 4, prixUnitaire: 11.5 },
    { id: 5, designation: 'Oeuf', quantite: 20, prixUnitaire: 3.99 },
  ];

  constructor() {}

  createDb() {
    return { facture: this.facturesList };
  }
}
