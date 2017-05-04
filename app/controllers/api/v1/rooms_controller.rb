class Api::V1::RoomsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :update]

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

  # def update
  # current_pet = Room.find_by(user_id: params[:id])
  #
  # if params[:interaction][:hug]
  #   new_happiness = current_pet.happiness.value + 1
  #   if new_happiness > 5
  #     new_happiness = 5.0
  #   end
  #   current_pet.happiness.value = new_happiness
  #   current_pet.happiness.save
  #   message = "pet hugged"
  # end
  #
  # if params[:interaction][:feed]
  #   new_hunger = current_pet.hunger.value + 1
  #   if new_hunger > 5
  #     new_hunger = 5.0
  #   end
  #   current_pet.hunger.value = new_hunger
  #   current_pet.hunger.save
  #   message = "pet fed"
  # end

  def update
    @room = Room.find(params[:id])
    @room.update(room_params)
    if @room.save!
      render json: @room
    end
  end

private
  def room_params
    params.permit(:id, :user_id, :plant_health, :name, :created_at, :updated_at)
  end
end
