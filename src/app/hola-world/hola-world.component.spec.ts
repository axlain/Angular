import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaWorldComponent } from './hola-world.component';

describe('HolaWorldComponent', () => {
  let component: HolaWorldComponent;
  let fixture: ComponentFixture<HolaWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolaWorldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolaWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
