import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAdminUserComponent } from './details-admin-user.component';

describe('DetailsAdminUserComponent', () => {
  let component: DetailsAdminUserComponent;
  let fixture: ComponentFixture<DetailsAdminUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAdminUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAdminUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
