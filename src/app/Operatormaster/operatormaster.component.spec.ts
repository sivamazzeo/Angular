import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperatormasterComponent } from './operatormaster.component';



describe('ReportComponent', () => {
  let component: OperatormasterComponent;
  let fixture: ComponentFixture<OperatormasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatormasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatormasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
