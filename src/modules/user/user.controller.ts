import { NextFunction, Request, Response } from "express";
import { User } from "./user.model";

const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  try {
    return res.status(200).send("get users");
  } catch (error) {
    console.log("🚀 ~ file: user.controller.ts:8 ~ getUsers ~ error", error);
    return res.status(500).json("Internal server error");
  }
};

const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  return res.status(200).json("User Id");
};

const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  try {
    const rta = await User.create({
      firstName: "name",
      lastName: "lastName",
      email: "mail@mail.com",
    });
    return res.send(rta);
  } catch (error) {
    console.log("🚀 ~ file: user.controller.ts:38 ~ error", error)
    
    return res.status(500).json("Internal server error");
  }
};

export { getUsers, getUserById, createUser };
