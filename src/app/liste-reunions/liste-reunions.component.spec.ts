import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeReunionsComponent } from './liste-reunions.component';

describe('ListeReunionsComponent', () => {
  let component: ListeReunionsComponent;
  let fixture: ComponentFixture<ListeReunionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeReunionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeReunionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
