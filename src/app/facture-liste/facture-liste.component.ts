import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';


@Component({
  selector: 'app-facture-liste',
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './facture-liste.component.html',
  styleUrl: './facture-liste.component.css',
})
export class FactureListeComponent implements OnInit {
  factureGroup!: FormGroup;

  facturesList = [
    { id: 1, designation: 'Banane', quantite: 4, prixUnitaire: 1 },
    { id: 2, designation: 'Pomme de terre', quantite: 2, prixUnitaire: 2.4 },
    { id: 3, designation: 'Pomme', quantite: 10, prixUnitaire: 2.5 },
    { id: 4, designation: 'Boeuf', quantite: 4, prixUnitaire: 11.5 },
    { id: 5, designation: 'Oeuf', quantite: 20, prixUnitaire: 3.99 },
  ];
  total =0;
  edit = false;
  factureId: number = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.factureGroup = this.fb.group({
      id: this.facturesList.length,
      designation: '',
      quantite: '',
      prixUnitaire: '',
    });

    this.onCalcul();
  }

  onCalcul() {
    this.total = 0;
    for (const element of this.facturesList) {
      this.total += element.prixUnitaire * element.quantite;
    }
  }

  onSubmit() {
    console.log(this.factureGroup.value);
    if (this.edit) {
      this.facturesList[this.factureId] = {
        ...this.facturesList[this.factureId],
        designation: this.factureGroup.value.designation,
        quantite: this.factureGroup.value.quantite,
        prixUnitaire: this.factureGroup.value.prixUnitaire,
      };
      this.edit = false;
    } else {
      if (this.factureGroup.valid) {
        this.facturesList.push(this.factureGroup.value);
      }
    }
    this.factureGroup.reset();

    this.onCalcul();
  }

  OnEdit(id: number) {
    console.log(id);
    this.edit = true;
    let index = this.facturesList.findIndex((item) => item.id == id);
    this.factureId = index;

    this.factureGroup.patchValue({
      id:this.facturesList[index].id,
      designation: this.facturesList[index].designation,
      quantite: this.facturesList[index].quantite,
      prixUnitaire: this.facturesList[index].prixUnitaire,
    });
    console.log(this.factureGroup.value);
  }

  onDelete(id: number) {
    console.log(id);
    let index = this.facturesList.findIndex((item) => item.id == id);
    this.facturesList.splice(index, 1);
    this.onCalcul();
    console.log(this.facturesList);
  }
}
