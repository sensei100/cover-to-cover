class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :created_at, :upvotes, :downvotes

  has_one :user
  
end
