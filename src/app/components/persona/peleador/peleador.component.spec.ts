import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeleadorComponent } from './peleador.component';

describe('PeleadorComponent', () => {
  let component: PeleadorComponent;
  let fixture: ComponentFixture<PeleadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeleadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
