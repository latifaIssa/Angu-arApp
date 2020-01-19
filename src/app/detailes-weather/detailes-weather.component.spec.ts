import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailesWeatherComponent } from './detailes-weather.component';

describe('DetailesWeatherComponent', () => {
  let component: DetailesWeatherComponent;
  let fixture: ComponentFixture<DetailesWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailesWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailesWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
