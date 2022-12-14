You can build a book rentals application that will allow to perform the following actions. Create a User and Admin account CRUD operations with books: Create new book listing, Edit a book listing, Delete a book listing Show users if a book is available to rent or not Book info should contain- Isbn number(It is property of book which is unique for each book), Name, Author, PublishedOn, AddedOn Apis should be as follows for CRUD on books GET /book/list -> returns all books POST /book/create -> add new book POST/book?delete=true (should accept one of the 3 query params -> delete, rent, return) -> should delete/Rent/Return book GET /rented/{userId} -> return all books rented by user Enhancement User should not be able to rent more than 2 books at a time Admin should not be able to add duplicate books Optimization Add validations on user roles i.e. there should be strict checks on user roles -> Renter and Admin. Renter should not be able to perform any updated books i.e only admin should be able to add, delete, add update (rented, return) on books. To add this kind of validation you are expected to add a middleware which will check for user role and the operation user is performing and will proceed only if user has the permissions else return an error GET /book/list -> User, Admin POST /book/create -> Admin POST/book?delete=true (should accept one of the 3 query params -> delete, rent, return) -> Admin GET /rented/{userId} -> User, Admin
built an application

The application should allow users to perform the following actions:

- Create a User and Admin account

- CRUD operations with books:

- Create new book listing
- Edit a book listing
- Delete a book listing

- Show users if a book is available to rent or not

Book info should contain:

- Isbn number (It is property of book which is unique for each book)
- Name
- Author
- PublishedOn
- AddedOn

Apis should be as follows for CRUD on books:

GET /book/list -> returns all books
POST /book/create -> add new book
POST/book?delete=true (should accept one of the 3 query params -> delete, rent, return) -> should delete/Rent/Return book
GET /rented/{userId} -> return all books rented by user

Enhancement:

- User should not be able to rent more than 2 books at a time
- Admin should not be able to add duplicate books

Optimization:

- Add validations on user roles i.e. there should be strict checks on user roles -> Renter and Admin. R
