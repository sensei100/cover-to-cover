class RemoveDownvotesFromPosts < ActiveRecord::Migration[5.0]
  def change
    remove_column :posts, :downvotes, :integer
  end
end
