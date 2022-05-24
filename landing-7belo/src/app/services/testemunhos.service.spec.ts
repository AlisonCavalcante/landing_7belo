import { TestBed } from '@angular/core/testing';

import { TestemunhosService } from './testemunhos.service';

describe('TestemunhosService', () => {
  let service: TestemunhosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestemunhosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
