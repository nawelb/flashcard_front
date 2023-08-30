import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationFlashcardComponent } from './creation-flashcard.component';

describe('CreationFlashcardComponent', () => {
  let component: CreationFlashcardComponent;
  let fixture: ComponentFixture<CreationFlashcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationFlashcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationFlashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
