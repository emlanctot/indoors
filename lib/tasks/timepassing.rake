namespace :room_decline do
  desc "Ficus is slowly dying, and room is getting dirtier"
  task time_passing: :environment do
    puts "Forgetting to take care of your room..."

    User.find_each do |user|

      room = Room.find_by(user_id: (user.id))
      if !room.nil?
      room.room_decline
        if room.plant_health < 2 && room.cleanliness < 2
          RoomMailer.plant_email(user).deliver
          RoomMailer.clean_email(user).deliver
          puts 'this should be sending an email now'
        elsif room.plant_health < 2
          RoomMailer.plant_email(user).deliver
        elsif room.cleanliness < 2
          RoomMailer.clean_email(user).deliver
        end
      end
      
    end

  end

end
