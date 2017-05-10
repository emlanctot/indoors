# class ProfilesController < ApplicationController
#   skip_before_action :verify_authenticity_token
#   before_action :authenticate_user!
#
#   def index
#     @room = Room.where(user_id: current_user.id)
#     @current_user = current_user
#     respond_to do |format|
#       format.json  { render :json => {:user => @current_user }}
#     end
#   end
# end
