import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueStatisticsCountComponent } from './issue-statistics-count.component';

describe('IssueStatisticsCountComponent', () => {
  let component: IssueStatisticsCountComponent;
  let fixture: ComponentFixture<IssueStatisticsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueStatisticsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueStatisticsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
