class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  respond_to :json
  before_action :configure_permitted_parameters, if: :devise_controller?
  after_action :set_csrf_cookie

  def set_csrf_cookie
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  def index
  end

  protected

  def verified_request?
    super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:email, :password, :password_confirmation, :remember_me, :username) }
    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:email, :password, :password_confirmation, :current_password, :username, :admin) }
  end

end
