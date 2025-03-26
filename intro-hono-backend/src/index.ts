import { Hono } from 'hono';
import { logger } from 'hono/logger';
import todoRoutes from './routes/routes';

// Create a new Hono app
const app = new Hono();

// Add middleware for logging requests
app.use('*', logger());

// Root route
app.get('/', (c) => {
  return c.json({
    message: 'Welcome to our Todo API!',
    status: 'Server is running',
  });
});

// Mount todo routes
app.route('/todos', todoRoutes);


export default app;
