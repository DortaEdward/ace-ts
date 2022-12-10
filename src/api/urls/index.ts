import { Router, Request, Response, NextFunction } from "express";
import { Url, Urls, UrlWithId } from "./schema";
import { ObjectId } from "mongodb";

import { createUrl } from './service';

const router = Router();

router.post('/new', async (req: Request<{},UrlWithId,Url>,res: Response<UrlWithId>, next: NextFunction) => {
  await createUrl(req,res)
});

export default router;