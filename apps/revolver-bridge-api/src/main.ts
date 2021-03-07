import * as express from 'express';
import * as functions from 'firebase-functions';
// eslint-disable-next-line ordered-imports/ordered-imports
import 'firebase-admin';
import 'reflect-metadata';
import 'rxjs';

import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';

import { AppModule } from './app/app.module';

const server = express();

export const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance)
  );

  return app.init();
};

createNestServer(server)
  .then(() => console.log('Nest Ready'))
  .catch((err) => console.error('Nest broken', err));

// Connect express server to Firebase Functions
export const api = functions.https.onRequest(server);
