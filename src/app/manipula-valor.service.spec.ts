import { TestBed } from '@angular/core/testing';

import { ManipulaValorService } from './manipula-valor.service';

describe('ManipulaValorService', () => {
  let service: ManipulaValorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManipulaValorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
