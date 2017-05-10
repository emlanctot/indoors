class RoomsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!, except: [:index]

  def show
    @user = current_user
    @room = Room.where(user_id: current_user.id)
  end

  def new
    @room = Room.new
  end

  private

  def room_params
    params.require(:room).permit(:name, :user_id, :created_at)
  end

end
