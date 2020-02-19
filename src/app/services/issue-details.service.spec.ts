import { TestBed } from '@angular/core/testing';

import { IssueDetailsService } from './issue-details.service';

describe('IssueDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IssueDetailsService = TestBed.get(IssueDetailsService);
    expect(service).toBeTruthy();
  });
});
