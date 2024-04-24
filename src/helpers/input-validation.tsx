const name = (name: string) => /^[a-zA-Z -]*$/.test(name);

const email = (email: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const phone = (phone: string) => /(\d{3})(\d{3})(\d{4})/.test(phone);

export const inputValidation = {
    name,
    email,
    phone
};