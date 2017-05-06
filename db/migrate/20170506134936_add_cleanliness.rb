class AddCleanliness < ActiveRecord::Migration[5.0]
  def change
    add_column :rooms, :cleanliness, :integer, :default => 1
  end
end
