import { Router, Request, Response, NextFunction } from "express";
import { Url, Urls, UrlWithId } from "./schema";

export async function getUrl(req: Request, res: Response){
  try {
    const results = await Urls.findOne({shorten: req.params.shorten});
    res.redirect(results?.originalUrl as string);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function createUrl(req: Request<{}, UrlWithId, Url>, res: Response<UrlWithId>) {
  try {
    const payload: Url = {
      originalUrl : req.body.originalUrl,
      shorten: req.body.shorten
    }
    const results = await Urls.insertOne(payload);
    if (!results.acknowledged) throw new Error('Error creating Url');
    res.status(201);
  } catch (error: any) {
    res.status(500).send(error);
  }
};