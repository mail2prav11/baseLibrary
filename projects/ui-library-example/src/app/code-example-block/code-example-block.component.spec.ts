import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeExampleBlockComponent } from './code-example-block.component';

describe('CodeExampleBlockComponent', () => {
  let component: CodeExampleBlockComponent;
  let fixture: ComponentFixture<CodeExampleBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeExampleBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeExampleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
