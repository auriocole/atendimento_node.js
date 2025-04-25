const Sequelize = require("sequelize");
const database = require("../config/database");

const Atendimento = database.define("atendimento", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    service: Sequelize.STRING,
    client: Sequelize.STRING,
    status: {
        type: Sequelize.ENUM,
        values: ["Activo", "Pendente", "Concluido", "Cancelado"],
        defaultValue: "Activo",
        allowNull: false
    }
})

module.exports = Atendimento;