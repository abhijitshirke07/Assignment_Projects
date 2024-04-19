import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuessAnimalPage } from './guess-animal.page';

describe('GuessAnimalPage', () => {
  let component: GuessAnimalPage;
  let fixture: ComponentFixture<GuessAnimalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
