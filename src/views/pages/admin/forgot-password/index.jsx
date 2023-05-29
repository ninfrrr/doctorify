import { useForm } from 'react-hook-form';

import Button from '@/views/elements/button';
import TextField from '@/views/elements/text-field';

import AdminLayout from '@/views/layouts/admin-layout';

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
        <AdminLayout onSubmit={handleSubmit(onSubmit)}>
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
        </AdminLayout>
    );
};

export default ForgotPassword;
