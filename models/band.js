// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')

// MODEL
class Band extends Model{}
Band.init({
    band_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    genre: { 
        type: DataTypes.TEXT, 
        allowNull: false 
    },
    available_start_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
    end_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
}, {
    sequelize,
    modeName: 'Band',
    tableName: 'band',
    timestamps: false
});
return Band;


// EXPORT
module.exports = Band
