class Room < ActiveRecord::Base
  belongs_to :user

  validates :name, presence: true
  validates :user_id, presence: true
  validates_uniqueness_of :user_id
  validates :plant_health, :numericality => { :greater_than_or_equal_to => 0, :less_than_or_equal_to => 10 }

  def decline
    if plant_health.positive?
      self.plant_health = self.plant_health - 1
    else
      return true
    end
  end

  def room_decline
    self.decline
    self.save
    return (self.plant_health)
  end

end
