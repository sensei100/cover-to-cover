class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :isbn, :review, :rating

  has_many :users
end
