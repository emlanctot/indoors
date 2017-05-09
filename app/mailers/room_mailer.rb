class RoomMailer < ApplicationMailer

  def plant_email(user)
    @user = user
    @url = 'http://in-doors.herokuapp.com/'
    mail(to: @user.email, subject: 'You have forgotten about your ficus...')
  end

  def clean_email(user)
    @user = user
    @url = 'http://in-doors.herokuapp.com/'
    mail(to: @user.email, subject: 'You are neglecting your room...')
  end

  def signup_confirmation(user)
    @user = user
    if @user.persisted?
      mail to: @user.email, subject: "Sign Up Confirmation"
    end
  end

end
