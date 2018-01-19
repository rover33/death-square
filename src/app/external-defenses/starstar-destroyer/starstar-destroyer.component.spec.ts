import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarstarDestroyerComponent } from './starstar-destroyer.component';

describe('StarstarDestroyerComponent', () => {
  let component: StarstarDestroyerComponent;
  let fixture: ComponentFixture<StarstarDestroyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarstarDestroyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarstarDestroyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
