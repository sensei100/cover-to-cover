class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :books
  has_many :posts

end
