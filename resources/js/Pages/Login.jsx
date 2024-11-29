import Checkbox from "@/Components/Checkbox";
import AuthLayout from "@/Layouts/AuthLayout"; // Import the new layout
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import Button from "@/Components/Button";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => {
                reset("password");
                window.location.reload();
            },
        });
    };

    return (
        <>
            <Head title="Log in" />
            <AuthLayout>
                <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Welcome Back</h2>

                {status && (
                    <div className="mb-6 font-medium text-sm text-green-600 bg-green-100 p-3 rounded-lg">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <InputLabel htmlFor="email" value="Email" className="text-gray-700" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="password" value="Password" className="text-gray-700" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                            autoComplete="current-password"
                            onChange={(e) => setData("password", e.target.value)}
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData("remember", e.target.checked)}
                                className="text-green-600 focus:ring-green-500"
                            />
                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                        </label>
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="text-sm text-green-600 hover:text-green-800 transition duration-150 ease-in-out"
                            >
                                Forgot password?
                            </Link>
                        )}
                    </div>

                    <Button 
                        type="submit"
                        className="w-full hover:bg-green-700"
                        disabled={processing}
                        variant="primary"
                        bgColor="green-600"
                        textColor="white"
                        fullWidth={true}
                    >
                        Log in
                    </Button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have account ? {' '}
                    <Link
                        href={route("register")}
                        className="font-medium text-green-600 hover:text-green-500 transition duration-150 ease-in-out"
                    >
                        Register Now
                    </Link>
                </p>

            </AuthLayout>
        </>
    );
}
