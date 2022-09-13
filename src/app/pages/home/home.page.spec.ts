import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), RouterModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to pickup-calls on see all', () => {
    spyOn(router, 'navigate');
    component.goToPickupcalls();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-calls']);
  });

  it('should go to new pickup calls on create pickup all', () => {
    spyOn(router, 'navigate');
    component.newPickupCall();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-call']);
  });
});
