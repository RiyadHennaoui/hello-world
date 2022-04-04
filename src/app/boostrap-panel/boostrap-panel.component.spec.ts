import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostrapPanelComponent } from './boostrap-panel.component';

describe('BoostrapPanelComponent', () => {
  let component: BoostrapPanelComponent;
  let fixture: ComponentFixture<BoostrapPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoostrapPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostrapPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
