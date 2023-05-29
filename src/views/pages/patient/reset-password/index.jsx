import { useState } from 'react';
import { useForm } from 'react-hook-form';

import StatusResult from '@/views/components/status-result';

import Button from '@/views/elements/button';
import TextField from '@/views/elements/text-field';

import PatientLayout from '@/views/layouts/patient-layout';

const ResetPassword = () => {
    const [result, setResult] = useState();

    const { control, handleSubmit } = useForm({
        defaultValues: {
            password: '',
            confirm_password: ''
        }
    });

    if (result === 'success')
        return (
            <StatusResult
                type="success"
                title="Your password has successfully changed!"
                button="Back to Login"
                href="/login"
            />
        );

    if (result === 'failed') {
        return (
            <StatusResult
                type="danger"
                title="Your password cannot be reset at this time"
                detail="Please try again"
                button="Back to Login"
                href="/login"
            />
        );
    }

    const onSubmit = () => {
        alert('submitted');
        setResult('failed');
    };
    return (
        <PatientLayout onSubmit={handleSubmit(onSubmit)}>
            <h1 className="w-full text-center text-xl font-semibold">
                Ganti kata sandi untuk @patient
            </h1>
            <div className="flex w-full flex-col gap-4">
                <TextField
                    control={control}
                    className="w-full"
                    name="password"
                    fieldName="Password"
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

            <Button className="w-full" type="submit">
                Ganti kata sandi
            </Button>
        </PatientLayout>
    );
};

export default ResetPassword;
