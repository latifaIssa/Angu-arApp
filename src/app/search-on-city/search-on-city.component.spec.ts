import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOnCityComponent } from './search-on-city.component';

describe('SearchOnCityComponent', () => {
  let component: SearchOnCityComponent;
  let fixture: ComponentFixture<SearchOnCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOnCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOnCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
