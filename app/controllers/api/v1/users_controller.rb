class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

end
