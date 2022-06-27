import React from 'react';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import useMutation from '../../../../core/hooks/useMutation';
import { useAuthContext } from '../AuthProvider';
import useTitle from '../../../../core/hooks/useTitle';
import useForm from '../../../../core/hooks/useForm';
import Input from '../../../Design/Form/Input';
import Label from '../../../Design/Form/Label';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  name: yup.string().required(),
  userName: yup.string().required()

});

const defaultData = {
  email: '',
  password: '',
  name: '',
  userName: ''
};
function RegisterScreen() {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const { isLoading, error, mutate } = useMutation();
  useTitle('Register');

  const {
    values, errors, handleChange, handleSubmit
  } = useForm(schema, { ...defaultData });

  const handleData = (values) => {
    mutate(`${process.env.REACT_APP_API_URL}/user`, {
      method: 'POST',
      data: values,
      onSuccess: () => {
        navigate('/login');
      },
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/3 login-img">
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-4xl font-bold text-green-400">SocialWAY</h2>

              <p className="max-w-xl mt-3 text-gray-300">
                Welcome to a brand new social media platform. Share your toughts, post videos
                or photos or make multiple pages abour YOUR heroes. Welcome to
                {' '}
                <span className="font-bold text-green-400">SocialWAY</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-green-400 dark:text-green-400">SocialWAY</h2>

              <p className="mt-3 text-gray-500 dark:text-gray-300">Sign up to make your own account</p>
            </div>

            <div className="mt-8">
              <form onSubmit={handleSubmit(handleData)} noValidate>
                <div>
                  <Label
                    htmlFor="email"
                    className="block text-sm text-gray-600 dark:text-gray-200"
                  >
                    Email Adress
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:green-blue-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={values.email}
                    error={errors.email}
                    disabled={isLoading}
                    onChange={handleChange}
                  />
                </div>

                <div className="mt-3">
                  <div className="flex justify-between mb-2">
                    <Label
                      htmlFor="password"
                      className="block text-sm text-gray-600 dark:text-gray-200"
                    >
                      Password
                    </Label>
                  </div>

                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your password"
                    className="block w-full px-4 py-2 mb-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:green-blue-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={values.password}
                    error={errors.password}
                    disabled={isLoading}
                    onChange={handleChange}
                  />
                </div>

                <div className="mt-3">
                  <Label
                    htmlFor="name"
                    className="block text-sm text-gray-600 dark:text-gray-200"
                  >
                    Full name
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your full name"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:green-blue-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={values.name}
                    error={errors.name}
                    disabled={isLoading}
                    onChange={handleChange}
                  />
                </div>

                <div className="mt-3">
                  <Label
                    htmlFor="userName"
                    className="block text-sm text-gray-600 dark:text-gray-200"
                  >
                    Username
                  </Label>
                  <Input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="Your username"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:green-blue-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={values.userName}
                    error={errors.userName}
                    disabled={isLoading}
                    onChange={handleChange}
                  />
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-400 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                  >
                    Sign up
                  </button>
                </div>

              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                Already have an account?
                {' '}
                <a href="/login" className="text-green-400 focus:outline-none focus:underline hover:underline">Sign up</a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;
