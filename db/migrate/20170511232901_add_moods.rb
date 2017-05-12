class AddMoods < ActiveRecord::Migration[5.0]
  def change
    add_column :rooms, :moods, :string, null: false
  end
end
