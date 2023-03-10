export interface IScoreboardRes {
  username: string
  coin: number
}

export interface IScoreboard {
  data: IScoreboardRes[]
  status: boolean
}
