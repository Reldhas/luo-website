import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapPageComponent } from './pap-page.component';

describe('PapPageComponent', () => {
  let component: PapPageComponent;
  let fixture: ComponentFixture<PapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PapPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
