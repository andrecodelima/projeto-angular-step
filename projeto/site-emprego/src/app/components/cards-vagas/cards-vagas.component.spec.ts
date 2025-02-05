import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsVagasComponent } from './cards-vagas.component';

describe('CardsVagasComponent', () => {
  let component: CardsVagasComponent;
  let fixture: ComponentFixture<CardsVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsVagasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
