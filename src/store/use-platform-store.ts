import { getAllPlatforms } from '@/lib/api/platform-api';
import { Platform } from '@/types/platform';
import { create } from 'zustand';


interface PlatFormState {
    platforms: Platform[];
    loading: boolean;
    error: string | null;
    fetchPlatforms: () => Promise<void>;
    renderKey: number;
    rerender: () => void;
}

const usePlatformStore = create<PlatFormState>((set) => ({
    platforms: [],
    loading: false,
    error: null,
    renderKey: 0,
    rerender: () => {
        set(prev => ({ renderKey: prev.renderKey + 1 }))
    },
    fetchPlatforms: async () => {
        set({ loading: true, error: null });
        try {
            const response = await getAllPlatforms();
            if (!response.error) {
                set({ platforms: response.data, loading: false });
            } else {
                set({ loading: false, error: response.error });
            }
        } catch (error: any) {
            set({ loading: false, error: error.message });
        }
    },
}));

export default usePlatformStore;