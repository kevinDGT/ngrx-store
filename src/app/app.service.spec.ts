import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [AppService]
  }));

  it('should be created', () => {
    const service: AppService = new AppService(null);
    expect(service).toBeTruthy();
  });
});
