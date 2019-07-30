import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPeleadorComponent } from './detail-peleador.component';

describe('DetailPeleadorComponent', () => {
  let component: DetailPeleadorComponent;
  let fixture: ComponentFixture<DetailPeleadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPeleadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPeleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
