import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationsPageComponent } from './configurations-page.component';

describe('ConfigurationsPageComponent', () => {
  let component: ConfigurationsPageComponent;
  let fixture: ComponentFixture<ConfigurationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
