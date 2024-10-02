import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSubscriberComponent } from './single-subscriber.component';

describe('SingleSubscriberComponent', () => {
  let component: SingleSubscriberComponent;
  let fixture: ComponentFixture<SingleSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleSubscriberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
