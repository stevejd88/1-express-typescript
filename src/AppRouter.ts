import express from 'express';

export class AppRouter {
  private static instance: express.Router;

  static getInstance(): express.Router {
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }

    return AppRouter.instance;
  }
}

// ======================================================
// ====================== NOTES =========================
// ======================================================
// 1. static means property or method can be accessed without having to create an instance of the class.
