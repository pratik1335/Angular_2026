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