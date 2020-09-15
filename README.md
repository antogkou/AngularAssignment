1) Assignemnt 1
# Create a feature in your Angular app that manages countries.

Ideally, you should create a separate Angular module that will contain one component. The component will be responsible for displaying a list of countries with the following properties:

name: string;

flag: string;

capital: string;

region: string;



Each country should be displayed as a Bootstrap card component https://getbootstrap.com/docs/4.5/components/card/. 



The image of the card should display the flag of the country, the title should display the name of the country and the description should display a combination of capital and region such as:

Capital: Athens
Region: Europe


The backend URL that you are going to use is: https://restcountries.eu/rest/v2/ 

2) Assignment 2 (Routing,Forms)
● Apply the following requirements:
○ The minimum length of first name to be 3
○ Required fields are: First name, last name, angular preference, favourite
language
○ Display the message “field is required” for the required fields, and “the
minimum length of field is 3 characters” for the first name
● On submit button click, we should see on the console the values of the form

# AngularCountriesExercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
