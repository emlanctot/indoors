class AddEscape < ActiveRecord::Migration[5.0]
  def change
    add_column :rooms, :escape, :boolean, :default => false
  end
end
