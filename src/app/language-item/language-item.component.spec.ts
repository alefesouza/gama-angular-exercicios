import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageItemComponent } from './language-item.component';

describe('LanguageItemComponent', () => {
  let component: LanguageItemComponent;
  let fixture: ComponentFixture<LanguageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
