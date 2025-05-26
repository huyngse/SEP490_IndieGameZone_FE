
import { getAllAgeRestrictions } from '@/lib/api/age-restriction-api';
import { AgeRestriction } from '@/types/age-restriction';
import { create } from 'zustand';


interface AgeRestrictionState {
    ageRestrictions: AgeRestriction[];
    loading: boolean;
    error: string | null;
    fetchAgeRestrictions: () => Promise<void>;
    renderKey: number;
    rerender: () => void;
}

const useAgeRestrictionStore = create<AgeRestrictionState>((set) => ({
    ageRestrictions: [],
    loading: false,
    error: null,
    renderKey: 0,
    rerender: () => {
        set(prev => ({ renderKey: prev.renderKey + 1 }))
    },
    fetchAgeRestrictions: async () => {
        set({ loading: true, error: null });
        try {
            const response = await getAllAgeRestrictions();
            if (!response.error) {
                set({ ageRestrictions: response.data, loading: false });
            } else {
                set({ loading: false, error: response.error });
            }
        } catch (error: any) {
            set({ loading: false, error: error.message });
        }
    },
}));

export default useAgeRestrictionStore;