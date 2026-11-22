import { TestBed } from '@angular/core/testing';
import { UserService } from './user-service';

describe('UserService', () => {
  
  let service : UserService;

  // with beforeeach we can execute some code before each test
  // if we have four unit tests, so for each unit test, 
  // before each will get called before the test will get executed.
  beforeEach(() => {
    // configure testing module, our testing environment
    // create a testing environment for us.
    TestBed.configureTestingModule({});

    // we inject like the dependency injection, an instance of the user service into our testing environment.
    service = TestBed.inject(UserService);
  })

  // 1st unit test: check if we have an instance of the service
  it('should be created', () => {
    expect(service).toBeTruthy();
  })

  // 2nd test: check if we are getting users
  it('should get users', () => {
    service.getUsers().subscribe(users => {
      expect(users.length).toBeGreaterThan(0);
    })
  })
});


/*
describe('UserService', () => {
  let service: UserService

  beforeEach(() => {

    TestBed.configureTestingModule({});

    service = TestBed.inject(UserService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  })

  it('should get users', () => {
    service.getUsers().subscribe((users) => {
      expect(users.length).toBeGreaterThan(0);
    })
  })

})

*/
