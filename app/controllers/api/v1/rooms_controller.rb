class Api::V1::RoomsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @user = current_user
    @room = Room.find(params[:id])
    render json: @rooms
  end

end
