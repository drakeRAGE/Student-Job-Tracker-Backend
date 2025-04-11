import express from 'express';
const router = express.Router();
import { getAllJobs, createJob, getJobById, updateJob, deleteJob } from '../controllers/jobController.js';

router.get('/', getAllJobs);
router.post('/', createJob);
router.get('/:id', getJobById);
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);

export default router;
