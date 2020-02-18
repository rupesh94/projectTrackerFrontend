import { TestBed } from '@angular/core/testing';

import { IssueStatisticsCountService } from './issue-statistics-count.service';

describe('IssueStatisticsCountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IssueStatisticsCountService = TestBed.get(IssueStatisticsCountService);
    expect(service).toBeTruthy();
  });
});
