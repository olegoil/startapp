import { TestBed } from '@angular/core/testing';

import { MissingTranslationService } from './missing-translation.service';

describe('MissingTranslationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MissingTranslationService = TestBed.get(MissingTranslationService);
    expect(service).toBeTruthy();
  });
});
