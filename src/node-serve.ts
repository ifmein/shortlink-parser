import 'dotenv/config';
import { serve } from '@hono/node-server';
import app from './app';

const port = Number(process.env.APP_PORT) || 8787;
console.log(`Server is running on http://127.0.0.1:${port}`);
serve({ fetch: app.fetch, port, hostname: '127.0.0.1' });
