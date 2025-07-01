import { Request, Response } from "express";

export class IndexController {
  constructor() {}

  handle = (req: Request, res: Response) => {
    return res.status(200).send("Hello World");
  };
}
