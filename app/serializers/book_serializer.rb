class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :review, :rating

  has_many :users

end
