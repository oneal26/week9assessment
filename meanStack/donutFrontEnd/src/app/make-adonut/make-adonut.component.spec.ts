import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAdonutComponent } from './make-adonut.component';

describe('MakeAdonutComponent', () => {
  let component: MakeAdonutComponent;
  let fixture: ComponentFixture<MakeAdonutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeAdonutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeAdonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
