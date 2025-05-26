import { axiosClient } from "./config/axios-client";


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

type RegisterRequest = {
    email: string;           
    userName: string;       
    birthday: string;        
    password: string;       
    confirmPassword: string; 
    role: string;          
}

export const register = async (request: RegisterRequest) => {
    try {
        const result = await axiosClient.post(`/api/Authentications/register`, request);
        return { error: null, data: result.data, success: true };
    } catch (error: any) {
        return handleApiError(error);
    }
}

export const prepareRegisterData = (formValues: any) => {
    return {
        email: formValues.email,
        userName: formValues.userName, 
        birthday: formValues.birthday?.format('YYYY-MM-DD') || formValues.birthday,
        password: formValues.password,
        confirmPassword: formValues.confirmPassword || formValues['Repeat password'],
        role: formValues.Role || formValues.role || 'Player'
    };
};