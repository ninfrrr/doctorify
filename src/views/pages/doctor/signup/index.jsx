import { useForm } from 'react-hook-form';

import Button from '@/views/elements/button';
import TextField from '@/views/elements/text-field';

import DoctorLayout from '@/views/layouts/doctor-layout';
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
        <DoctorLayout onSubmit={handleSubmit(onSubmit)}>
            <a href="/" className="flex items-center">
                <img src={logo} className="h-15" alt="Doctorify Logo" />
            </a>
            {/* <h1 className="w-full text-center text-2xl font-semibold">
                CREATE ACCOUNT
            </h1> */}
            <div className="flex w-full flex-col gap-4">
                <TextField
                    control={control}
                    className="w-full"
                    name="email"
                    fieldName="email"
                    placeholder="email"
                    type="email"
                    rules={{ required: true }}
                />
                <TextField
                    control={control}
                    className="w-full"
                    name="username"
                    fieldName="Username"
                    placeholder="Username"
                    rules={{ required: true }}
                />
                <TextField
                    control={control}
                    className="w-full"
                    name="password"
                    fieldName="password"
                    placeholder="Password"
                    type="password"
                    rules={{ required: true }}
                />
                <TextField
                    control={control}
                    className="w-full"
                    name="confirm_password"
                    fieldName="Confirm Password"
                    placeholder="Confirm Password"
                    type="password"
                    rules={{ required: true }}
                />
            </div>

            <div className="flex w-full items-center justify-between">
                <p className="text-sm">
                    Already have an account?{' '}
                    <a href="/login" className="font-semibold text-cyan-800">
                        Login
                    </a>
                </p>
                <Button type="submit">Sign Up</Button>
            </div>
        </DoctorLayout>
    );
};

export default SignUp;
