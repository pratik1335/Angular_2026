import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list-component';
import { UserService } from '../user-service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;

  // A fixture in Angular is like a wrapper for our component, 
  // which has additional functionalities which we can call.
  let fixture: ComponentFixture<UserListComponent>;

  let userService: UserService;
  let userServiceSpy: jasmine.Spy

  // This is the hardest part, to get all the information before writing the unit test
  beforeEach(async () => {

    // We also want to implement some button click events and all of that.
    // So let's just put in await right here before the test bed configure testing module
    await TestBed.configureTestingModule({
      imports: [UserListComponent],
      providers: [UserService]
    }).compileComponents();  // We call compile components to take the template URL and study URL and put them all together

    // Here we simply call the test bed API and create a component of type user list component.
    // So now we have our fixture. and we have a fixture that's kind of a wrapper.
    fixture = TestBed.createComponent(UserListComponent);

    // And inside of that fixture we have our component instance.
    // our component, which is of type user list component, not the fixture
    component = fixture.componentInstance;

    userService = TestBed.inject(UserService);

    // By using spy on, we can spy on the user service and on the get users method of it so that we know how
    // often this method got called and which arguments got used.
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(of([
      // some mock data
      {id:1, name:"Shivam"},
      {id:2, name:"Kartik"}
    ]))

    /*
    the component itself only gives us well access to the component properties and all of what's inside of the component.
    But for our unit test, we maybe want to trigger specific life cycles or and that's definitely something that you want to use.
    Pretty often we want to trigger the change detection.
    So by calling fixture dot detect changes, we basically manually trigger our change detection to update the data binding.
    */
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve users from the UserService on init', () => {

    // The life cycle on our component, we have to use the fixture, which is our wrapper.
    // So if we want to do that, if we want to start the life cycle hook in that unit test, now we want to
    // say fixture dot detect changes that one will start the life cycle hook onInit and update all the
    // data bindings.
    fixture.detectChanges()

    expect(userServiceSpy).toHaveBeenCalled();
  })

  it('should retrieve users from the UserService when the refresh button is clicked', () => {
    // start the life cycle
    fixture.detectChanges()

    userServiceSpy.calls.reset(); // so that we don't have any information about prior calls, because we want to check on refresh button now.

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);  // invoking the event

    expect(userServiceSpy).toHaveBeenCalled();
  })
});
