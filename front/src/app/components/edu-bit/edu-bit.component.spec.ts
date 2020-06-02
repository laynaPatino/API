import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduBITComponent } from './edu-bit.component';

describe('EduBITComponent', () => {
  let component: EduBITComponent;
  let fixture: ComponentFixture<EduBITComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduBITComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduBITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
