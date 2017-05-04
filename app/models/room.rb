class Room < ActiveRecord::Base
  belongs_to :user

  validates :name, presence: true
  validates :user_id, presence: true
  validates_uniqueness_of :user_id
  validates :plant_health, :numericality => { :greater_than => 0, :less_than_or_equal_to => 10 }

  def plant_decline
    if self.plant_health.positive?
      self.plant_health = self.plant_health - 1
    else
      return true
    end
  end

  def room_decline
    self.plant_decline
    self.save
    return (self.plant_health)
  end

end
