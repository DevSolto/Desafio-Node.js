export class CustomError extends Error {
  statusCode: number

  constructor(message: string, statusCode: number = 400,) {
    super(message)
    this.statusCode = statusCode
  }
}

export class ThisCpfIsAlreadyInUse extends CustomError {
  constructor() {
    super('This CPF is already in use')
  }
}