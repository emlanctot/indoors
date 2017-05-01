class RoomsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def index
    @rooms = Room.all
  end

  def show
    @room = Room.find(params[:id])
  end

  private

  def room_params
    params.require(:room).permit(:name, :user_id, :created_at)
  end

end
