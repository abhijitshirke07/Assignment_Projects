import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadscreenPage } from './loadscreen.page';

describe('LoadscreenPage', () => {
  let component: LoadscreenPage;
  let fixture: ComponentFixture<LoadscreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadscreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
