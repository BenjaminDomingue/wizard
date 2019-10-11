class AddDogFriendlyToDistricts < ActiveRecord::Migration[5.2]
  def change
    add_column :districts, :dog_score, :float, default: 0.0
    add_column :districts, :dog_raw, :jsonb, default: []
  end
end
