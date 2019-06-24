import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicallspecificComponent } from './apicallspecific.component';

describe('ApicallspecificComponent', () => {
  let component: ApicallspecificComponent;
  let fixture: ComponentFixture<ApicallspecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApicallspecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApicallspecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
