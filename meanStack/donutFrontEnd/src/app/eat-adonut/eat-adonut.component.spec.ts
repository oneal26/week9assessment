import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EatAdonutComponent } from './eat-adonut.component';

describe('EatAdonutComponent', () => {
  let component: EatAdonutComponent;
  let fixture: ComponentFixture<EatAdonutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatAdonutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EatAdonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
