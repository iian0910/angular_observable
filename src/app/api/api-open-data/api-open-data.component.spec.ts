import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiOpenDataComponent } from './api-open-data.component';

describe('ApiOpenDataComponent', () => {
  let component: ApiOpenDataComponent;
  let fixture: ComponentFixture<ApiOpenDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiOpenDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiOpenDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
