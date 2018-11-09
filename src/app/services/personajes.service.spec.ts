import { TestBed, inject } from '@angular/core/testing';

import { PersonajesService } from './personajes.service';

describe('PersonajesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonajesService]
    });
  });

  it('should be created', inject([PersonajesService], (service: PersonajesService) => {
    expect(service).toBeTruthy();
  }));
});
