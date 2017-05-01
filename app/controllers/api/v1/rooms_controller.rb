class Api::V1::RoomsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @rooms = Room.all
    render json: @rooms
  end

  def create
    if user_signed_in?
      @room = Room.create(room_params)
      @room.user_id = current_user.id
      if @room.save!
        render json: @room
      end
    else
      flash[:error] = "Error"
    end
  end

end
