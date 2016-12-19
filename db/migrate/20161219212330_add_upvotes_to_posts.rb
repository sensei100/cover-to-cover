class AddUpvotesToPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :upvotes, :integer
  end
end

