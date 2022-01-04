import { Request, Response } from 'express';
import { homeService } from '../services/homeService';

export const homeController = {
  home: async (req: Request, res: Response) => {
    try {
      const home = res.status(200)
        .json(homeService.getHomeMsg());

      return home
    } catch (err) {
      res.status(500).json({
        error: 'Internal server error'
      })
    }
  },

  ping: (req: Request, res: Response) => {
    try {
      const ping = res.status(200)
        .json(homeService.getPingMsg());

      return ping
    } catch (err) {
      res.status(500).json({
        error: 'Internal server error'
      })
    }
  }
}