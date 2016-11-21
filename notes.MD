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
