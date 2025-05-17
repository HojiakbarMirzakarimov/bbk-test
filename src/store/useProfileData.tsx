import { create } from "zustand";
import api from '../utils/axiosIntercereptos'

interface ProfileData {
    id: number;
    image:string;
    full_name: string;
    email?: string;  
    phone_number?: string; 
    user_roles?:string;
  }

  interface ProfileStore {
    profileData: ProfileData | null;  
    setProfileData: () => void;  
  }
  

const useProfileData = create<ProfileStore>((set) => ({
    profileData:null,
    setProfileData: () => {
        api.get("/me") 
        .then(data => {
            console.log(data.data.data);
            set({profileData: data.data.data})
            
        })
        .catch((err) => {
            console.log(err);
            
        })
    }
}))


export default useProfileData;