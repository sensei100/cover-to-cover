class AddBookUserIdToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :book_user_id, :integer
  end
end
