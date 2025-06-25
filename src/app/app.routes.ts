import { Routes } from '@angular/router';
import { FactureListeComponent } from './facture-liste/facture-liste.component';
import { FactureListMaterialComponent } from './facture-list-material/facture-list-material.component';

export const routes: Routes = [
  { path: 'facture-list', component: FactureListeComponent },
  { path: 'facture-list-material', component: FactureListMaterialComponent },
];
