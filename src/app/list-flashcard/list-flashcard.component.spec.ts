import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFlashcardComponent } from './list-flashcard.component';

describe('ListFlashcardComponent', () => {
  let component: ListFlashcardComponent;
  let fixture: ComponentFixture<ListFlashcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFlashcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFlashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
