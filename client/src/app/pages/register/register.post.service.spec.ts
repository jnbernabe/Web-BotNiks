import { TestBed } from '@angular/core/testing';

import { Register.PostService } from './register.post.service';

describe('Register.PostService', () => {
  let service: Register.PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Register.PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
