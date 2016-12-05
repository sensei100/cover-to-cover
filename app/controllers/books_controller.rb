class BooksController < ApplicationController
  
  def index
    books = Book.all
    render json: books
  end

  def show
    book = Book.find(params[:id])
    render json: book
  end

  def create
    user = User.find(current_user)
    book = user.books.create(book_params)
    if book.save
      render json: {
        status: 'ok',
        book: {
          id: book.id,
          title: book.title,
          author: book.author,
          review: book.review,
          rating: book.rating,
          user_id: user
        }
      }
    else
      render json: 
      { errors: post.errors.full_messages },
      status: :unprocessable_entity
    end
  end

  def update
    book = Book.find(params[:id])
    if book.update(book_params)
      render json: { status: 'ok' }
    else
      render json: 
      { errors: book.errors.full_messages },
      status: :unprocessable_entity
    end
  end

  def destroy
    book = Book.find(params[:id])
    if book.user == current_user.id
      if book.destroy
        render json: { status: 'ok' }
    else
      render json: 
      { errors: book.errors.full_messages },
      status: :unprocessable_entity
      end
    end
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :rating, :review, :user_id)
  end
end