import { TestBed } from '@angular/core/testing';

import { RegisterPostService } from './register.post.service';

describe('Register.PostService', () => {
  let service: RegisterPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
