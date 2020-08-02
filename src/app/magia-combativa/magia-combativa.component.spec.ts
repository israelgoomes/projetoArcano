import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagiaCombativaComponent } from './magia-combativa.component';

describe('MagiaCombativaComponent', () => {
  let component: MagiaCombativaComponent;
  let fixture: ComponentFixture<MagiaCombativaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagiaCombativaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagiaCombativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
