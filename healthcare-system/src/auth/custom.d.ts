import { User } from './user.model'; // Adjust the path as necessary

declare global {
  namespace Express {
    interface Request {
      user?: User; // Add the user property
    }
  }
}
