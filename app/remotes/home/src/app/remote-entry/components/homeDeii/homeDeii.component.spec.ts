import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeDeiiComponent } from './homeDeii.component';

describe('HomeDeiiComponent', () => {
  let component: HomeDeiiComponent;
  let fixture: ComponentFixture<HomeDeiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDeiiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeDeiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
