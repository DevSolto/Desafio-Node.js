import { CustomError } from "./error"


export class ThisNameIsAlreadyInUse extends CustomError {
  constructor() {
    super('This name is already in use')
  }
}
