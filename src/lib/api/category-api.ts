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
export const getAllCategories = async () => {
    try {
        const { data } = await axiosClient.get(`/api/categories`);
        return { error: null, data: data, success: true };
    } catch (error) {
        return handleApiError(error);
    }
};

export const createCategory = async (categoryData: { name: string }) => {
    try {
        const { data } = await axiosClient.post('/api/categories', categoryData);
        return { error: null, data: data, success: true };
    } catch (error) {
        return handleApiError(error);
    }
};

export const updateCategory= async (categoryId: string | number, categoryData: { name: string }) => {
    try {
        const { data } = await axiosClient.put(`/api/categories/${categoryId}`, categoryData);
        return { error: null, data: data, success: true };
    } catch (error) {
        return handleApiError(error);
    }
};

export const deleteCategory = async (categoryId: string | number) => {
    try {
        const { data } = await axiosClient.delete(`/api/categories/${categoryId}`);
        return { error: null, data: data, success: true };
    } catch (error) {
        return handleApiError(error);
    }
};

export const getCategoryById = async (categoryId: string | number) => {
    try {
        const { data } = await axiosClient.get(`/api/categories/${categoryId}`);
        return { error: null, data: data, success: true };
    } catch (error) {
        return handleApiError(error);
    }
};