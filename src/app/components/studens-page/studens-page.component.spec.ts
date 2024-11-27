import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudensPageComponent } from './studens-page.component';

describe('StudensPageComponent', () => {
  let component: StudensPageComponent;
  let fixture: ComponentFixture<StudensPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudensPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudensPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
