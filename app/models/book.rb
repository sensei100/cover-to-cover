class Book < ApplicationRecord
  has_many :users, through: :book_users
  has_many :book_users
end
