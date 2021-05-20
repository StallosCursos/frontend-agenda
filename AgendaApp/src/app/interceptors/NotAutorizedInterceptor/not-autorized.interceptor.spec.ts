import { TestBed } from '@angular/core/testing';

import { NotAutorizedInterceptor } from './not-autorized.interceptor';

describe('NotAutorizedInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NotAutorizedInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NotAutorizedInterceptor = TestBed.inject(NotAutorizedInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
