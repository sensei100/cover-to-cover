Possible pages for the app:

Home
About: Explanation of the app 
Book Details: basic book info 
Discussion
Member profile: Shows books read, all posts/comments
Books reviewed?

Models:
Books: has_many users through BookUser
  -title, author, isbn, review, rating
Users: has_many posts, has_many books through BookUser
Posts: belongs_to users

Javascript and AngularJS:
- Use bower to handle front end assets
- Angular templates (angular-rails-templates)
- Angular UI Router
- Angular Devise (front end authentication)
- Bootstrap 

Need to set up login and new user sign up
Need to create a reading profile that can be updated by user