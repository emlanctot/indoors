class CreateRooms < ActiveRecord::Migration[5.0]
  def change
    create_table :rooms do |t|
      t.string :name, null: false
      t.belongs_to :user, null:false

      t.timestamps
    end
  end
end
