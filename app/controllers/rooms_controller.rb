class RoomsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def index
    @rooms = Room.all
  end

  def show
    @room = Room.find(params[:id])
  end

  def create
    if user_signed_in?
      binding.pry
      @room = Room.create(room_params)
      @room.user_id = current_user.id
      @user = current_user
      if @room.save!
        flash[:notice] = 'Room built successfully'
        redirect_to @room
      end
    else
      flash[:error] = "Error"
    end
  end

  private

  def room_params
    params.require(:room).permit(:name, :user_id, :created_at)
  end

end
