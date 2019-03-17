import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAlumnoComponent } from './detail-alumno.component';

describe('DetailAlumnoComponent', () => {
  let component: DetailAlumnoComponent;
  let fixture: ComponentFixture<DetailAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
