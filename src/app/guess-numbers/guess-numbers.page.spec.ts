import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuessNumbersPage } from './guess-numbers.page';

describe('GuessNumbersPage', () => {
  let component: GuessNumbersPage;
  let fixture: ComponentFixture<GuessNumbersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessNumbersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
