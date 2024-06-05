// src/FormContext.js
import React, { createContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        appName: '',
        type: '',
        company: '',
        address: '',
        country: null,
        state: '',
        email: false,
        name: false,
        phone: false,
        useraddress: false,
        social: false,
        other: false,
        location: false,
        phonebook: false,
        camera: false,
        web: false,  
        post: false,
        bymail: false,
        byphone: false
    });

    const updateFormData = (newData) => {
        setFormData((prev) => ({ ...prev, ...newData }));
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormContext;
