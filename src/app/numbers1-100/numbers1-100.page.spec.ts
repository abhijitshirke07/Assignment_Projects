import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Numbers1100Page } from './numbers1-100.page';

describe('Numbers1100Page', () => {
  let component: Numbers1100Page;
  let fixture: ComponentFixture<Numbers1100Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Numbers1100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
