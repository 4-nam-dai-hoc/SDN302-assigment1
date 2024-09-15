import { Request, Response, NextFunction } from 'express';

// Utility function to handle 404 errors
export const handleNotFound = (res: Response, message: string) => {
  return res.status(404).json({ success: false, error: message });
};

// Utility function to handle 400 errors
export const handleBadRequest = (res: Response, message: string) => {
  return res.status(400).json({ success: false, error: message });
};

// Utility function to handle 500 errors
export const handleServerError = (res: Response, message: string) => {
  return res.status(500).json({ success: false, error: message });
};

// Utility function to handle successful responses
export const handleSuccess = (res: Response, message: string, data: any) => {
  return res.status(200).json({ success: true, message, data });
};

// Error handling middleware
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Internal Server Error' });
};