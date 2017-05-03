Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "rooms#index"

  namespace :api do
    namespace :v1 do
      resources :rooms, only: [:index, :create, :new, :show, :update, :edit]
    end
  end

  resources :rooms

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index]
    end
  end

end
