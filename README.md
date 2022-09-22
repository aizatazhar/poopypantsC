# CS3219 Task C - Authentication & Authorization

An API to get some dummy sensitive employee data that requires authentication and authorisation.

### Routes

-   `authenticate`
    -   API for getting authenticated user’s email and roles using JWT
    -   JWT expires after 15 minutes
-   `employees`
    -   Contains sensitive information about employees
    -   Must be authenticated and have admin role to be able to view

### Middlewares

-   `authenticate`
    -   Verifies the JWT and sets a roles header on the request for the next middleware
-   `authorise`
    -   Checks the authenticated user’s roles
