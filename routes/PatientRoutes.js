import express from 'express';
import {
    addPatient,
    PatientinRoom,
    bulkaddPatients,
    getAllPatients
} from '../controllers/PatientControllers.js'

const router = express.Router();

router.post ("/patient", addPatient);
router.post ("/patients", bulkaddPatients);
router.get ("/patient", PatientinRoom);
router.get ("/patients", getAllPatients);

export default router;