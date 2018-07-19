import { TestBed, inject } from '@angular/core/testing';

import { CommentListService } from './comment-list.service';

describe('CommentListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentListService]
    });
  });

  it('should be created', inject([CommentListService], (service: CommentListService) => {
    expect(service).toBeTruthy();
  }));
});
