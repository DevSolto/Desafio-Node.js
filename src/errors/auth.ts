import { CustomError } from "./error";

export class Unauthorized extends CustomError {
  constructor() {
    super("Passwords don't match", 404)
  }
}