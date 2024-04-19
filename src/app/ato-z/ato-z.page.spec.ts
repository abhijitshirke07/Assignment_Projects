import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtoZPage } from './ato-z.page';

describe('AtoZPage', () => {
  let component: AtoZPage;
  let fixture: ComponentFixture<AtoZPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AtoZPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
