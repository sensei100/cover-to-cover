class RemoveBookUserIdFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :book_user_id, :integer
  end
end
