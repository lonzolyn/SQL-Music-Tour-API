'use strict'
module.exports= {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.creatTable('stage_events', {
            stage_events_id:{
                allowNull:false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTERGER
            },
            stage_id: {
                type : Sequelize.SMALLINT,
                allowNUll:false
            },
            event_id: {
                type: Sequelize>SMALLINT,
                ALLOWNULL: FALSE
            }
        })   
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('stage_event')
    }
}