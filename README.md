# RESERVATION SERVICE
This Reservation Service is a service provide API that manage room in a building with time management.

## Instruction
After clone the repository, there are some part to do before running the service.
-   PostgreSql, and nodemon need to be installed
-   cd service (terminal)
-   nmp i (terminal)
-   nodemon app.js (terminal)

 There are API's and what are those API is :
-   GET - Show all room : http://localhost:3000/
-   GET - Show available room : http://localhost:3000/available/
-   POST - Add room to database : http://localhost:3000/
-   PATCH - Add reservation : http://localhost:3000/add/:id
-   PATCH - Delete reservation : http://localhost:3000/delete/:id