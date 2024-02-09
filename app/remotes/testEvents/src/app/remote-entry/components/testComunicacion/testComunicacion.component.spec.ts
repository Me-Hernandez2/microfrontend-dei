import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestComunicacionComponent } from './testComunicacion.component';

describe('TestComunicacionComponent', () => {
  let component: TestComunicacionComponent;
  let fixture: ComponentFixture<TestComunicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComunicacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComunicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
