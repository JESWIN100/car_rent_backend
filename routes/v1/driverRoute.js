import express from 'express';
import { createDriver, deleteDriver, getDriver, getDriverList } from '../../controllers/driverController.js';  // Ensure the path and extension are correct
import { authUser } from '../../middlewares/userAuth.js';

const router = express.Router();

router.post('/drivers', authUser, (createDriver));
router.get('/drivers/:id?',authUser, (getDriver));
router.get('/driverlist',authUser, (getDriverList));

router.delete('/drivers/:id?',authUser, (deleteDriver))
export default router;
