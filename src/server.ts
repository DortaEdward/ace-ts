import express from "express";
import * as dotenv from "dotenv";
import path from 'path';

import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import {client} from './db';

import { Urls } from "./api/urls/schema";
import { getUrl } from './api/urls/service';

import api from './api';

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: false }))

app.use(cors());
app.use(morgan('common'));
app.use(helmet());
app.use(express.json());

app.get('/', async (req,res) => {
    const results = await Urls.find();
    const urls = await results.toArray()
    res.render('index',{
      urls: urls
    });
})

app.get('/:shorten', async (req,res) => {
  await getUrl(req,res);
})

app.use('/api', api);

client.connect(err => {
  if(err){
    console.log(err);
  }
  app.listen(PORT,()=>{
    console.log('Listening on port:', PORT);
  })

})
