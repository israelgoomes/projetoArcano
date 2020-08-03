import { TestBed } from '@angular/core/testing';

import { AuthGuardPersonService } from './auth-guard-person.service';

describe('AuthGuardPersonService', () => {
  let service: AuthGuardPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
