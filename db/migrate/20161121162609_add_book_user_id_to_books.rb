class AddBookUserIdToBooks < ActiveRecord::Migration[5.0]
  def change
    add_column :books, :book_user_id, :integer
  end
end
