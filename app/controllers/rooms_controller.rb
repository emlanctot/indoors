class RoomsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def show
    @room = Room.find(params[:id])
    @user = current_user
  end

  private

  def room_params
    params.require(:room).permit(:name, :user_id, :created_at)
  end

end
