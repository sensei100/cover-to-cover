class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :created_at, :upvotes

  has_one :user
  
end
