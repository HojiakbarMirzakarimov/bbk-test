import {create} from "zustand"

interface TokenState {
    token: string | null;
    setToken: (value: string) => void; 
  removeToken: () => void; 
}

const useToken = create<TokenState>((set)  => ({
    token: JSON.parse(localStorage.getItem("token") || "null"),
    setToken: (value ) => {
        localStorage.setItem("token", JSON.stringify(value))
         set({token: value})
    },
    removeToken: () => { 
        localStorage.removeItem("token")
        set({token: null})
    }
}))

export default useToken