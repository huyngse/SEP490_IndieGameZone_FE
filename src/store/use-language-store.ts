
import { getAllLanguages } from '@/lib/api/language-api';
import { Language } from '@/types/language';
import { create } from 'zustand';


interface LanguageState {
    languages: Language[];
    loading: boolean;
    error: string | null;
    fetchLanguages: () => Promise<void>;
    renderKey: number;
    rerender: () => void;
}

const useLanguageStore = create<LanguageState>((set) => ({
    languages: [],
    loading: false,
    error: null,
    renderKey: 0,
    rerender: () => {
        set(prev => ({ renderKey: prev.renderKey + 1 }))
    },
    fetchLanguages: async () => {
        set({ loading: true, error: null });
        try {
            const response = await getAllLanguages();
            if (!response.error) {
                set({ languages: response.data, loading: false });
            } else {
                set({ loading: false, error: response.error });
            }
        } catch (error: any) {
            set({ loading: false, error: error.message });
        }
    },
}));

export default useLanguageStore;