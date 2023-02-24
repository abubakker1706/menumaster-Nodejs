import express from 'express';
import { allFunction } from '../Controller/userController.js';

const router= express.Router();

router.post("/", (req, res) => {
    allFunction(req.body, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  });
  
export default router