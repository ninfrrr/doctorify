import { useForm } from 'react-hook-form';

import Button from '@/views/elements/button';
import TextField from '@/views/elements/text-field';

import AdminLayout from '@/views/layouts/admin-layout';
import logo from '@/assets/images/logo.png';

const Login = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    });

    const onSubmit = () => {
        alert('submitted');
    };

    return (
        <AdminLayout onSubmit={handleSubmit(onSubmit)}>
            <a href="/" className="flex items-center">
                <img src={logo} className="h-15" alt="Doctorify Logo" />
            </a>
            {/* <h1 className="w-full text-center text-2xl font-semibold">Login</h1> */}
            <div className="flex w-full flex-col gap-4">
                <p className="px-1 text-base">Email</p>
                <TextField
                    control={control}
                    className="w-full"
                    name="email"
                    fieldName="Email"
                    placeholder="Masukkan email anda"
                    rules={{ required: true }}
                />
                <p className="px-1 text-base">Kata Sandi</p>
                <div className="flex w-full flex-col items-end gap-2">
                    <TextField
                        control={control}
                        className="w-full"
                        name="password"
                        fieldName="Password"
                        placeholder="Masukkan kata sandi anda"
                        type="password"
                        rules={{ required: true }}
                    />
                    <a
                        href="/forgot-password"
                        className="text-sm text-cyan-800"
                    >
                        Lupa kata sandi anda?
                    </a>
                </div>
            </div>

            <div className="flex w-full items-center justify-between">
                <p className="text-sm">
                    Belum memiliki akun?{' '}
                    <a href="/signup" className="font-semibold text-cyan-800">
                        Sign Up
                    </a>
                </p>
                <Button type="submit">Login</Button>
            </div>
        </AdminLayout>
    );
};

export default Login;
