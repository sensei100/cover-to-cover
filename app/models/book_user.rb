class BookUser < ApplicationRecord

  has_many :books 
  has_many :users
  
end
