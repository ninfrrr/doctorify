import { useForm } from 'react-hook-form';

import Button from '@/views/elements/button';
import TextField from '@/views/elements/text-field';

import PatientLayout from '@/views/layouts/patient-layout';

const ForgotPassword = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: ''
        }
    });

    const onSubmit = () => {
        alert('submitted');
    };

    return (
        <PatientLayout onSubmit={handleSubmit(onSubmit)}>
            <h1 className="w-full text-center text-2xl font-semibold">
                Atur ulang kata sandi anda
            </h1>
            <TextField
                control={control}
                className="w-full"
                name="email"
                fieldName="email"
                placeholder="email"
                type="email"
                rules={{ required: true }}
            />

            <Button className="w-full" type="submit">
                Kirim email pengaturan ulang kata sandi
            </Button>
        </PatientLayout>
    );
};

export default ForgotPassword;
