class RemoveBookUserIdFromBooks < ActiveRecord::Migration[5.0]
  def change
    remove_column :books, :book_user_id, :integer
  end
end
