import { TestBed } from '@angular/core/testing';

import { LightmodeService } from './lightmode.service';

describe('LightmodeService', () => {
  let service: LightmodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightmodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
