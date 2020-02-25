import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteprojectsComponent } from './deleteprojects.component';

describe('DeleteprojectsComponent', () => {
  let component: DeleteprojectsComponent;
  let fixture: ComponentFixture<DeleteprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
