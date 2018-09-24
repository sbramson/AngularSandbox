import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamestageComponent } from './gamestage.component';

describe('GamestageComponent', () => {
  let component: GamestageComponent;
  let fixture: ComponentFixture<GamestageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamestageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamestageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
