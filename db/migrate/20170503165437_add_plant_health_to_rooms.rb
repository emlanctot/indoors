class AddPlantHealthToRooms < ActiveRecord::Migration[5.0]
  def change
    add_column :rooms, :plant_health, :integer, :default => 1
  end
end
