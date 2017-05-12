# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


jerry = User.create(email: 'jerryseinfeld@hotmail.com', password: '123456')
elaine = User.create(email: 'elaine@hotmail.com', password: '123456')
kramer = User.create(email: 'kramer@hotmail.com', password: '123456')
george = User.create(email: 'george@hotmail.com', password: '123456')
milford = User.create(email: 'milford@hotmail.com', password: '123456')
waitress = User.create(email: 'waitress@hotmail.com', password: '123456')
waitor = User.create(email: 'waitor@hotmail.com', password: '123456')
sheperd = User.create(email: 'sheperd@hotmail.com', password: '123456')
farmer = User.create(email: 'farmer@hotmail.com', password: '123456')
doctor = User.create(email: 'doctor@hotmail.com', password: '123456')
mason = User.create(email: 'mason@hotmail.com', password: '123456')

Room.create(name: 'Mulholland Dr', user_id: 5, moods: 'Sad')
Room.create(name: 'Commonwealth Ave', user_id: 6, moods: 'Calm')
Room.create(name: 'Center Hill Rd', user_id: 7, moods: 'Happy')
Room.create(name: 'East Main St', user_id: 8, moods: 'Anxious')
Room.create(name: 'Warner Rd', user_id: 9, moods: 'Heroic')
Room.create(name: 'Bickford Ave', user_id: 10, moods: 'Corporate')
Room.create(name: 'Linden St', user_id: 11, moods: 'Sad')
Room.create(name: 'Summer St', user_id: 12, moods: 'Happy')
Room.create(name: 'Main St', user_id: 13, moods: 'Anxious')
Room.create(name: 'Riverton Rd', user_id: 14, moods: 'Calm')
Room.create(name: 'Pratt St', user_id: 15, moods: 'Anxious')
