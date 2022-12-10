import { Router } from "express";
import UrlRouter from './urls/index';

const router = Router();

router.use('/url', UrlRouter);

export default router;