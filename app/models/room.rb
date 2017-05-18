class Room < ActiveRecord::Base

  ALLOWED_MOODS= [
    'Sad',
    'Corporate',
    'Anxious',
    'Heroic',
    'Calm',
    'Happy'
  ]

  belongs_to :user

  validates :name, length: { maximum: 50 }
  validates :user_id, presence: true
  validates_uniqueness_of :user_id
  validates :plant_health, :numericality => { :greater_than => 0, :less_than_or_equal_to => 10 }
  validates :cleanliness, :numericality => { :greater_than => 0, :less_than_or_equal_to => 10 }
  validates :moods, :inclusion=> { :in => ALLOWED_MOODS }

  def plant_decline
    if self.plant_health.positive?
      self.plant_health = self.plant_health - 1
    else
      return true
    end
  end

  def cleanliness_decline
    if self.cleanliness.positive?
      self.cleanliness = self.cleanliness - 1
    else
      return true
    end
  end

  def room_decline
    self.plant_decline
    self.save
    self.cleanliness_decline
    self.save
  end



end
