import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevisionDeteccionesComponent } from './revision-detecciones.component';

describe('RevisionDeteccionesComponent', () => {
  let component: RevisionDeteccionesComponent;
  let fixture: ComponentFixture<RevisionDeteccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevisionDeteccionesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RevisionDeteccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
