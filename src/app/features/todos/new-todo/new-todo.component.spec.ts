import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodoComponent } from './new-todo.component';

describe('CreateTodoComponent', () => {
  let component: CreateTodoComponent;
  let fixture: ComponentFixture<CreateTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
