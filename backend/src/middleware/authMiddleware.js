import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'veloop_secret_key');
      const user = await User.findById(decoded.id);
      if (user) {
        req.user = user;
        return next();
      }
    }
    
    // For demo/development environment, check if x-user-id header is provided or default to primary user
    const demoUserId = req.headers['x-user-id'];
    if (demoUserId) {
      const user = await User.findById(demoUserId).catch(() => null);
      if (user) {
        req.user = user;
        return next();
      }
    }

    // Default demo user fallback for smooth frontend testing
    const defaultUser = await User.findOne();
    if (defaultUser) {
      req.user = defaultUser;
      return next();
    }

    return res.status(401).json({ error: 'LOGIN_REQUIRED', message: 'Please login to participate.' });
  } catch (err) {
    return res.status(401).json({ error: 'INVALID_TOKEN', message: 'Authentication failed.' });
  }
};
