class Book < ApplicationRecord
  has_many :users, through: :bookuser
end
