namespace :room_decline do
  desc "Ficus is slowly dying, and room is getting dirtier"
  task time_passing: :environment do
    puts "Forgetting to take care of your room..."

    Room.find_each do |room|
      room.room_decline
      if room.plant_health == 1
        puts 'will eventually send email'
      end
    end
  end
end
