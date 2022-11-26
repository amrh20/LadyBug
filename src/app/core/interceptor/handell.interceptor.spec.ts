import { TestBed } from '@angular/core/testing';

import { HandellInterceptor } from './handell.interceptor';

describe('HandellInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HandellInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HandellInterceptor = TestBed.inject(HandellInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
