### What is unit testing
    Checking individual parts(units) of code for correctness

### Example of Unit testing
    UserService -> UserProfileComponent 
                          |
                          -> Unit test to verify that the component renders the data correctly

### Benefits of Unit Testing
    1. Regression prevention : ensures that the new changes don't break exisiting functionality
    2. Easier debugging : identifies issues early in the development process
    3. Helps developers to refine their code structure (code-design improvement)
    4. Easier maintenance because tests document behavior and intent

### Angular testing tools
    1. Jasmine framework for writing and organizing unit tests in a clean and readable format
    2. Karma framework to run tests and receive test reports
     
    Both of them are automatically included when we create a new angular project

### Spec -> Test Specifications

### How Angular Unit Testing Works
    1. Writing Test Suites (Collection of test cases)
    2. Defining Specs (individual test case within suites)
    3. Making Assertions (checking if a particular condition is met)

### Running Unit Tests
    ng test -> Starts the Karma test runner and runs all the unit tests in the project


### Testbed API
    We can use testbed api to inject an instance of a service that we can use of unit testing

### Important
   Angular handles components and directives and pipes differently in comparison to services.
   Services, for example, are getting injected.

   But for a component., We have to use the declaration.
   So we create a declarations array.

### Jasmine's Spy Functionality
    When we have a dependency our user service because our user list component shows the list of the users and
    those get fetched from the user service.
    So we want to separate them because we want to spy on the service.
    This is because we want to isolate our component and our service when it comes to testing.
    
    If we write unit tests for our component, we only want to write the unit test for our component here
    and the same for the service.
    So we have to separate them.
    We do not want to be dependent on the service when we want to test our user list component.
    So this is why we use Jasmine's "spy" functionality.


### Questions on Unit Testing
    1. What is the primary purpose of a Component Fixture in Angular testing?
       --- To create and manage a test environment for a component
    
    2. Which tool is responsible for running Angular unit tests in a browser environment?
       --- Karma
    
    3. What is the correct way to handle dependencies in component testing?
       --- Use TestBed.configureTestingModule to provide dependencies

    4. What is ngOnInit testing primarily used for?
       --- Testing component intialization and lifecycle hooks
 











