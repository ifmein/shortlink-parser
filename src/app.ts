import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { followURL, validateURL } from './utils';

const app = new Hono();

app.use(cors());

app.get('/', (c) => c.text('Hello!'));

app.post('/shortlink', async (c) => {
  const { url } = await c.req.json();
  if (!validateURL(url)) return c.json({ code: 400, message: 'Invalid URL string' });
  const result = await followURL(url);
  return c.json({ code: 0, result });
});

export default app;
