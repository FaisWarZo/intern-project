export type TLocalKey =
  | "token"
  | "email"
  | "address"
  | "loginWith"
  | "time"
  | "wallet-connector"

export enum ELocalKey {
  token = "token",
  email = "email",
  address = "address",
  loginWith = "loginWith",
  time = "time",
  walletConnector = "wallet-connector"
}

export interface ILocal {
  key: TLocalKey
  value?: string
}
