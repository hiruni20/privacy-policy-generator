import React, { createContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        appName: '',
        type: '',
        company: '',
        address: '',
        country: null,
        state: ''
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
