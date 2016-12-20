Rails.application.routes.draw do
  root 'application#index'
  
  devise_for :users
  

  resources :users, only: [:show, :edit]
  resources :books, only: [:create, :destroy, :update, :index, :show]
  resources :posts, only: [:create, :destroy, :update, :index, :show] do
    member do
            put '/upvote' => 'posts#upvote'
        end
    end
end
