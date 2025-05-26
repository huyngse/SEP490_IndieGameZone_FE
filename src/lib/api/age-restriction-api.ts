import { axiosClient } from './config/axios-client';

export const handleApiError = (error: any) => {
    try {
        const errorMessage = error.response?.data.message || error?.message || 'An unexpected error occurred.';
        const data = null;
        return { error: errorMessage, data };
    } catch (err) {
        throw new Error('An unexpected error occurred.');
    }
};

export const getAllAgeRestrictions = async () => {
    try {
        const { data } = await axiosClient.get(`/api/AgeRestrictions`);
        return { error: null, data: data, success: true };
    } catch (error) {
        return handleApiError(error);
    }
}

type AddAgeRestrictionRequest = {
    code: string,
    description: string
}

export const addAgeRestriction = async (request: AddAgeRestrictionRequest) => {
    try {
        const { data } = await axiosClient.post(`/api/AgeRestrictions`, request);
        return { error: null, data: data, success: true };
    } catch (error) {
        return handleApiError(error);
    }
}

type UpdateAgeRestrictionRequest = {
    code: string,
    description: string
}

export const updateAgeRestriction = async (id: string, request: UpdateAgeRestrictionRequest) => {
    try {
        const { data } = await axiosClient.put(`/api/AgeRestrictions/${id}`, request);
        return { error: null, data: data, success: true };
    } catch (error) {
        return handleApiError(error);
    }
}

export const deleteAgeRestriction = async (id: string) => {
    try {
        const { data } = await axiosClient.delete(`/api/AgeRestrictions/${id}`);
        return { error: null, data: data, success: true };
    } catch (error) {
        return handleApiError(error);
    }
}