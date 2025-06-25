import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureListMaterialComponent } from './facture-list-material.component';

describe('FactureListMaterialComponent', () => {
  let component: FactureListMaterialComponent;
  let fixture: ComponentFixture<FactureListMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactureListMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureListMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
