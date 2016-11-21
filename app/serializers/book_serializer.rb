class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :isbn, :review, :rating, :user_id

  has_many :users

end
