class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def index
    @users = User.all
    @current_user = current_user
    @room = Room.where(user_id: current_user.id)
    respond_to do |format|
      format.json  { render :json => { :current_user => @current_user, :room => @room }}
    end
  end

  def create
    @user = User.create(user_params)
    if @user.save!
      render json: @user
    end
  end
end
