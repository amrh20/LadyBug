import { TestBed } from '@angular/core/testing';

import { CrudRequestsService } from './crud-requests.service';

describe('CrudRequestsService', () => {
  let service: CrudRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
