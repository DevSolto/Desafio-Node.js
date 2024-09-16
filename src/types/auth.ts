export type LoginParams = {
  cpf: string
  password: string
}

export type AuthPayload = {
  id: string;
  role: 'ADMIN' | 'USER';
  iat: number;
  exp: number;
};

export function isAuthPayload(value: any): value is AuthPayload {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.id === 'string' &&
    (value.role === 'ADMIN' || value.role === 'USER') &&
    typeof value.iat === 'number' &&
    typeof value.exp === 'number'
  );
}