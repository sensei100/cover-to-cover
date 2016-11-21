class UsersController < ApplicationController
  #before_action :authenticate_user!
  
  def show
    user = User.find(params[:id])
    render json: user
  end

  def edit
  end

end