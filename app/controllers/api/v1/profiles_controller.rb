class Api::V1::ProfilesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @room = Room.where(user_id: current_user.id)
    @current_user = current_user

    respond_to do |format|
      format.json  { render :json => {:user => @current_user }}
    end
  end

end
