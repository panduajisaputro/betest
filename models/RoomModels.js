// import Patient from './PatientModels.js';
import {
    DataTypes
} from 'sequelize';
import db from '../config/database.js';
// import Patient from '../models/PatientModels.js';

const Room = db.define("room", {
    room_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    room_type: {
        type: DataTypes.ENUM('VIP', 'Regular'),
        allowNull: false
    },
    isOccupied: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    floor: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},{ timestamps: false });


    // Room.belongsTo(Patient);


(async () => {
    await db.sync();
})();


export default Room;


