import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebmainComponent } from './webmain.component';

describe('WebmainComponent', () => {
  let component: WebmainComponent;
  let fixture: ComponentFixture<WebmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
