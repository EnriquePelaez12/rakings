import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailContactoComponent } from './detail-contacto.component';

describe('DetailContactoComponent', () => {
  let component: DetailContactoComponent;
  let fixture: ComponentFixture<DetailContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
