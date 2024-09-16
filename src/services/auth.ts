import { Unauthorized } from "../errors/auth";
import { UserNotFound } from "../errors/users";
import { getUserByCpfModel } from "../models/users";
import app from "../server";
import { LoginParams } from "../types/auth";
import bcrypt from 'bcrypt';

export async function loginService(loginParams: LoginParams) {
  const userWithThisCpf = await getUserByCpfModel(loginParams.cpf)

  if (!userWithThisCpf) {
    throw new UserNotFound()
  }

  const thePasswordMatch = await bcrypt.compare(loginParams.password, userWithThisCpf.passwordHash)

  if (!thePasswordMatch) {
    throw new Unauthorized()
  }

  const token = app.jwt.sign(
    {
      id: userWithThisCpf.id,
      role: userWithThisCpf.role
    },
    {
      expiresIn: '100h'
    }
  )
  return { token }
}