import { CustomError } from "./error"


export class ThisCpfIsAlreadyInUse extends CustomError {
  constructor() {
    super('This CPF is already in use')
  }
}
export class UserNotFound extends CustomError {
  constructor() {
    super('User not found', 404)
  }
}
export class UserDoesNotHaveTheRequiredRole extends CustomError {
  constructor() {
    super('User does not have the required role', 404)
  }
}
