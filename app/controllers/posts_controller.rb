class PostsController < ApplicationController
  before_action :authenticate_user!, only: [:create]

  def index
    posts = Post.all
    render json: posts
  end

  def show
    post = Post.find(params[:id])
    render json: post
  end

  def create
    post = current_user.posts.new(post_params)
   if post.save
      render json: {
        status: 'ok',
        post: {
          id: post.id,
          content: post.content,
          user_id: post.user_id,
          user: {
            id: post.user.id,
            username: post.user.username,
            email: post.user.email
          },
          created_at: post.created_at
        }
      }
    else
      render json: 
      { errors: post.errors.full_messages },
      status: :unprocessable_entity
    end
  end

  def update
    post = Post.find(params[:id])
    if post.update(post_params)
     render json: {
        status: 'ok',
        post: {
          id: post.id,
          content: post.content,
          user_id: post.user_id,
          user: {
            id: post.user.id,
            username: post.user.username,
            email: post.user.email
          },
          created_at: post.created_at
        }
      }
    else
      render json: 
      { errors: post.errors.full_messages },
      status: :unprocessable_entity
    end
  end

  def destroy
    if current_user
      post = Post.find(params[:id])
        if post.destroy
          render json: { status: 201 }
        else
          render json: { errors: post.errors.full_messages },
          status: 422
        end
      end
  end

  def upvote
    post = Post.find(params[:id])
    post.increment!(:upvotes)

    respond_with post
  end

  private

  def post_params
    params.require(:post).permit(:content, :user_id)
  end
end