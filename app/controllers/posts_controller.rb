class PostsController < ApplicationController
  #before_action :authenticate_user!, only: [:create, :update, :destroy]

  def index
    posts = Post.all
    render json: posts
  end

  def show
    post = Post.find(params[:id])
    render json: post
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: { status: 'ok' }
    else
      render json: 
      { errors: post.errors.full_messages },
      status: :unprocessable_entity
    end
  end

  def update
    post = Post.find(params[:id])
    if post.update(post_params)
      render json: { status: 'ok' }
    else
      render json: 
      { errors: post.errors.full_messages },
      status: :unprocessable_entity
    end
  end

  def destroy
    post = Post.find(params[:id])
    if post.user == current_user.id
      if post.destroy 
        render json: { status: 'ok' }
      else
      render json: 
        { errors: post.errors.full_messages },
        status: :unprocessable_entity
      end
    end
  end

  private

  def post_params
    params.require(:post).permit(:content, :user_id)
  end
end