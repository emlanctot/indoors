class Api::V1::RoomsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @room = Room.all
    render json: @room
  end

  def show
    @user = current_user
    @room = Room.where(user_id: current_user.id)
    # @room = Room.find(params[:id])
    render json: @room
  end

  def edit
    @room = Room.find(params[:id])
  end


  def new
    @room = Room.new
    # render json: @room
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

  def update
    @room = Room.find(params[:id])
    @room.update(room_params)
    if @room.save!
      render json: @room
    end
  end

  def destroy
    @room = Room.find(params[:id])
    @room.destroy
    if @room.destroy
      render json: @room
    end
  end


private
  def room_params
    params.require(:room).permit(:id, :user_id, :plant_health, :cleanliness, :name, :escape, :created_at, :updated_at)
  end
end
