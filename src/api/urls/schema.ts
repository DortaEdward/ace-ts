import { WithId } from 'mongodb';
import * as z from 'zod';

import { db } from '../../db';

const Url = z.object({
  originalUrl: z.string().min(11),
  shorten: z.string(),
})

export type Url = z.infer<typeof Url>;
export type UrlWithId = WithId<Url>;
export const Urls = db.collection<Url>('urls');
