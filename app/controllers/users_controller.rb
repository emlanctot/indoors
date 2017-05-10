# class UsersController < ApplicationController
#   skip_before_action :verify_authenticity_token
#
#   def index
#     @users = User.all
#     @current_user = current_user
#   end
#
#   def create
#     @user = User.create(user_params)
#     if @user.save!
#       render json: @user
#     end
#   end
# end
