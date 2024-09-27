import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImputPage } from './imput.page';

describe('ImputPage', () => {
  let component: ImputPage;
  let fixture: ComponentFixture<ImputPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ImputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
