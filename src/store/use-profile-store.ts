import { getUserInfo, refreshToken } from '@/lib/api/auth-api';
import { User } from '@/types/user';
import { create } from 'zustand';

interface ProfileState {
    profile?: User;
    loading: boolean;
    error: string | null;
    fetchProfile: () => Promise<void>;
    setProfile: (user?: User) => void;
    logout: () => void;
    renderKey: number;
    rerender: () => void;
}

const useProfileStore = create<ProfileState>((set) => ({
    profile: undefined,
    loading: false,
    error: null,
    renderKey: 0,
    rerender: () => {
        set(prev => ({ renderKey: prev.renderKey + 1 }))
    },
    fetchProfile: async () => {
        set({ loading: true, error: null });
        try {
            var response = await getUserInfo();
            if (!response.error) {
                set({ profile: response.data, loading: false });
            } else {
                const refreshResponse = await refreshToken();
                if (!refreshResponse.error) {
                    localStorage.clear();
                    localStorage.setItem("accessToken", refreshResponse.data.accessToken);
                    localStorage.setItem("refreshToken", refreshResponse.data.refreshToken);
                    response = await getUserInfo();
                    if (!response.error) {
                        set({ profile: response.data, loading: false });
                    } else {
                        set({ loading: false, error: response.error });
                    }
                } else {
                    set({ loading: false, error: "refresh failed" });
                    localStorage.clear();
                }
            }
        } catch (error: any) {
            set({ loading: false, error: error.message });
        }
    },
    setProfile(user) {
        set({ profile: user })
    },
    logout: () => {
        localStorage.clear();
        set({ profile: undefined })
    }
}));

export default useProfileStore;