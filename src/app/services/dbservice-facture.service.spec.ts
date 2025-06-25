import { TestBed } from '@angular/core/testing';

import { DBServiceFactureService } from './dbservice-facture.service';

describe('DBServiceFactureService', () => {
  let service: DBServiceFactureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DBServiceFactureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
