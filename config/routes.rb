Rails.application.routes.draw do
  root 'application#index'
  
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:show, :edit]
  resources :books, only: [:create, :destroy, :update, :index, :show]
  resources :posts, only: [:create, :destroy, :update, :index, :show]

end
