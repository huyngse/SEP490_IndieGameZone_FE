import { axiosClient } from './config/axios-client';

export interface ApiResponse {
  error: string | null;
  data: any;
  success: boolean;
}
export const handleApiError = (error: any): ApiResponse => {
  try {
    const errorMessage = error.response?.data.message || error?.message || 'An unexpected error occurred.';
    return { error: errorMessage, data: null, success: false };
  } catch (err) {
    return { error: 'An unexpected error occurred.', data: null, success: false };
  }
};
export const getAllPlatforms = async () => {
    try {
        const { data } = await axiosClient.get(`/api/platforms`);
        return { error: null, data: data, success: true };
    } catch (error) {
        return handleApiError(error);
    }
};

export const createPlatform = async (platformData: { name: string }) => {
    try {
        const { data } = await axiosClient.post('/api/platforms', platformData);
        return { error: null, data: data, success: true };
    } catch (error) {
        return handleApiError(error);
    }
};

export const updatePlatform= async (platformId: string | number, platformData: { name: string }) => {
    try {
        const { data } = await axiosClient.put(`/api/platforms/${platformId}`, platformData);
        return { error: null, data: data, success: true };
    } catch (error) {
        return handleApiError(error);
    }
};

export const deletePlatform = async (platformId: string | number) => {
    try {
        const { data } = await axiosClient.delete(`/api/platforms/${platformId}`);
        return { error: null, data: data, success: true };
    } catch (error) {
        return handleApiError(error);
    }
};

export const getPlatformById = async (platformId: string | number) => {
    try {
        const { data } = await axiosClient.get(`/api/platforms/${platformId}`);
        return { error: null, data: data, success: true };
    } catch (error) {
        return handleApiError(error);
    }
};