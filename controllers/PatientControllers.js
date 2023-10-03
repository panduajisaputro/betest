import Patient from '../models/PatientModels.js';
import Room from '../models/RoomModels.js';

export const addPatient = async (req, res) => {
    try {
        await Patient.create(req.body);
        res.status(201).json({
            msg: 'Patient Created'
        });
    } catch (error) {
        res.send(error.message);
    }
}

export const PatientinRoom = async (req, res) => {
    try {
        const patient = await Patient.findOne({
            where: {
                patient_id: req.query.patient_id
              }, include: Room
        });

        const response = {
            patient: patient,
            room: patient.Room
        }

        res.status(200).json({ response });
    } catch (error) {
        console.error('Error getting patient by room_id:', error);
        res.status(500).json({ error: `${error.message}` });
    }
}


export const getAllPatients = async (req, res) => {
    const status = req.query.status;
    const whereCondition = {};

    if (status && status !== 'all') {
        whereCondition.status = status;
    }

    try {
        const patients = await Patient.findAndCountAll({
            where: whereCondition
        });
        const response = {
            count: patients.count,
            patients: patients.rows
        };

        res.status(201).json(response);
    } catch (error) {
        res.send(error.message)
    }
}

export const bulkaddPatients = async (req, res) => {
    const PatientsToInsert = req.body;
    try {
        await Patient.bulkCreate(PatientsToInsert);
        res.status(201).json({
            msg: 'Patients Created'
        });
    } catch (error) {
        res.send(error.message);
    }
}

export const checkOut = async (req, res) => {

}