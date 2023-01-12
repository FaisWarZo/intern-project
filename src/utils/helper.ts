import { ILocal, TLocalKey } from "@interfaces/Ilocal"

const Helper = {
  setLocalStorage({ key, value }: ILocal) {
    localStorage.setItem(key, value || "")
  },

  getLocalStorage(_key: TLocalKey) {
    return typeof window !== "undefined" ? localStorage.getItem(_key) : null
  }
}

export default Helper
