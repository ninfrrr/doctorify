import { useForm } from 'react-hook-form';

import Button from '@/views/elements/button';
import TextField from '@/views/elements/text-field';

import PatientLayout from '@/views/layouts/patient-layout';
import logo from '@/assets/images/logo.png';

const SignUp = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            username: '',
            password: '',
            confirm_password: ''
        }
    });

    const onSubmit = () => {
        alert('submitted');
    };

    return (
        <PatientLayout onSubmit={handleSubmit(onSubmit)}>
            <a href="/" className="flex items-center">
                <img src={logo} className="h-15" alt="Doctorify Logo" />
            </a>
            {/* <h1 className="w-full text-center text-2xl font-semibold">
                CREATE ACCOUNT
            </h1> */}
            <div className="flex w-full flex-col gap-4">
                <p className="px-1 text-base">Email</p>
                <TextField
                    control={control}
                    className="w-full"
                    name="email"
                    fieldName="email"
                    placeholder="Masukkan email anda"
                    type="email"
                    rules={{ required: true }}
                />
                <p className="px-1 text-base">Nama</p>
                <TextField
                    control={control}
                    className="w-full"
                    name="username"
                    fieldName="Username"
                    placeholder="masukkan username anda"
                    rules={{ required: true }}
                />
                <p className="px-1 text-base">Kata Sandi</p>
                <TextField
                    control={control}
                    className="w-full"
                    name="password"
                    fieldName="password"
                    placeholder="Masukkan kata sandi anda"
                    type="password"
                    rules={{ required: true }}
                />
                <p className="px-1 text-base">Konfirmasi Kata Sandi</p>
                <TextField
                    control={control}
                    className="w-full"
                    name="confirm_password"
                    fieldName="Confirm Password"
                    placeholder="Konfirmasi Kata Sandi Anda"
                    type="password"
                    rules={{ required: true }}
                />
            </div>

            <div className="flex w-full items-center justify-between">
                <p className="text-sm">
                    Sudah memiliki akun?{' '}
                    <a href="/login" className="font-semibold text-cyan-800">
                        Login
                    </a>
                </p>
                <Button type="submit">Sign Up</Button>
            </div>
        </PatientLayout>
    );
};

export default SignUp;
