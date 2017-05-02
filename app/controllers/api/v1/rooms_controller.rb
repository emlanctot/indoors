class Api::V1::RoomsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def index
    @room = Room.where(user_id: current_user.id)
    # @room.user_id = current_user.id
    render json: @room
  end

  def show
    @user = current_user
    @room = Room.find(params[:id])
    render json: @room
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

private
  def room_params
    params.permit(:id, :user_id, :name, :created_at, :updated_at)
  end
end
