import { TestBed } from '@angular/core/testing';

import { AuthService } from './services/auth.service';

describe('AuthService', () => {
  const service: AuthService = new AuthService(null);
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
