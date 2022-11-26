import { TestBed } from '@angular/core/testing';

import { ISloginAdminGuard } from './islogin-admin.guard';

describe('ISloginAdminGuard', () => {
  let guard: ISloginAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ISloginAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
