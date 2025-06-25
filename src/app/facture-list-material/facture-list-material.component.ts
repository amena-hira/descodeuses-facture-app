import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Facture } from '../model/facture.model';
import { DBServiceFactureService } from '../services/dbservice-facture.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-facture-list-material',
  imports: [ReactiveFormsModule,FormsModule,MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './facture-list-material.component.html',
  styleUrl: './facture-list-material.component.css',
})
export class FactureListMaterialComponent implements OnInit {
  factureList: Facture[] = [];
  displayedColumns: string[] = [
    'no',
    'designation',
    'quantite',
    'prix unitaire',
  ];

  constructor(private service: DBServiceFactureService) {}

  ngOnInit(): void {
    this.service.getFactures().subscribe((data) => {
      console.log(data);
      this.factureList = data;
    });
  }
}
