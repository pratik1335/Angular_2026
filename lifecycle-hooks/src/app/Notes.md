###
Constructor : When angular creates object of a componennt then Constructor automatically executes at the same time.
1. It is a typescript feature
2. It is called as soon as the component is created
3. Use cases : Dependency Injection, Initial Object Creation
4. Avoid Api calls

ngOnInit() :
1. It is an Angular lifecycle hook
2. It is called after the component is initialized
3. Use cases : Api call, Initial data loading, Business logic
4. Api calls are done here.

## Constructor is used for object creation and DI, while ngOnInit executes after the component is initialized and it is used for api calls or initial data loading.

### Sequence
1. Angular creates object of the component 
2. Constructor is immediately called
3. Angular sets the inputs
4. ngOnInit is called

## Simple Rule
Constructor = creation of component
ngOnInit = component is ready, start the work

### Question : If @Input() userId is coming in component, so shoudl we call Api call in Constructor or in ngOnInit?

## Answer : 
If we do api call in the Constructor then at that time userId's value is not set because Constructor runs first.
Thats why we have angular lifecycle like this:
1. Constructor
2. @Input values are set
3. ngOnInit

When ngOnInit runs then the userId will be available.

Constructor is for object creation and DI.
Api calles should be made in ngOnInit after the component initialization & setting the input values.

### 
implements OnInit is optional from the runtime perspective. Angular identifies the lifecycle hook using the method name (ngOnInit). But using implements OnInit is a best practice because Typescript provides compile-time checking and improves code reusability.

adding implements OnInit provides:
1. Better type safety
2. Better readability
3. immediately observe that component is using ngOnInit
###

### In-depth answers
1. Constructor is a typescript feature that gets executed when Angular creates an instance of the component. It is mainly used for Dependency Injection and basic object initialization.

2. ngOnInit is an angular lifecycle hook that runs after angular initializes the component ans sets its input properties. It is commonly used for initialization logic such as API calls and data loading.

3. API calls are generally perfomed in ngOnInit because the component is fully initialized and Input values are available at that stage, whereas the Constructor is executed before angular completes component initialization.

