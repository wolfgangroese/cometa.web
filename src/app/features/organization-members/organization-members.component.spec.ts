import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationMembersComponent } from './organization-members.component';

describe('OrganizationMembersComponent', () => {
  let component: OrganizationMembersComponent;
  let fixture: ComponentFixture<OrganizationMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizationMembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
