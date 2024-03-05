const ProductModel = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      name: 
      {
        type: DataTypes.STRING,
        allowNull: false,
      },
      details: 
      {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      brand: 
      {
        type: DataTypes.STRING,
        allowNull: true,
      },
      model: 
      {
        type: DataTypes.STRING,
        allowNull: true,
      },
      data: 
      {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: true,
      },
      price: 
      {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      color: 
      {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  
    return Product;
  };
  
  module.exports = ProductModel;