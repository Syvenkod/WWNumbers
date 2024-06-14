import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersAnalysisComponentComponent } from './numbers-analysis-component.component';

describe('NumbersAnalysisComponentComponent', () => {
  let component: NumbersAnalysisComponentComponent;
  let fixture: ComponentFixture<NumbersAnalysisComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumbersAnalysisComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbersAnalysisComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
