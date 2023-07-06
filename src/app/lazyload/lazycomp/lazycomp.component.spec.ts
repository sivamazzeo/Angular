import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazycompComponent } from './lazycomp.component';

describe('LazycompComponent', () => {
  let component: LazycompComponent;
  let fixture: ComponentFixture<LazycompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazycompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazycompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
