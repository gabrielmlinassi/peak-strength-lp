import React from 'react';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from 'components/button';
import TextField from 'components/text-field';
import Checkbox from 'components/checkbox';
import Text from 'components/Text';
import OAuth2 from '@forms/OAuth2';

type SignUpFormProps = {
  shallowRouting?: boolean;
};

export type SignUpFormFields = {
  fullName: string;
  email: string;
  pwd: string;
  terms: boolean;
};

export const schema = yup
  .object()
  .shape({
    fullName: yup.string().required(),
    email: yup.string().required(),
    pwd: yup.string().required(),
    terms: yup.boolean().isTrue().required(),
  })
  .required();

const SignUpForm = ({ shallowRouting = true }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SignUpFormFields>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: SignUpFormFields) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setError('email', { message: 'Email already exists' });
    console.log(data);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Full Name"
        type="text"
        autoFocus
        error={errors.fullName && errors.fullName.message}
        {...register('fullName', { required: true })}
        fullWidth
      />
      <TextField
        label="Email"
        type="email"
        error={errors.email && errors.email.message}
        autoComplete="username"
        placeholder="ie. john.doe@email.com"
        {...register('email', { required: true })}
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        error={errors.pwd && errors.pwd.message}
        autoComplete="current-password"
        {...register('pwd', { required: true })}
        fullWidth
      />
      <Checkbox
        {...register('terms', { required: true })}
        label={
          <>
            I confirm I&apos;ve read and accept{' '}
            <NextLink href="/terms">
              <a className="text-[#FAA806]" tabIndex={-1}>
                terms &amp; conditions
              </a>
            </NextLink>
          </>
        }
      />
      <div className="pt-2">
        <Button
          type="submit"
          color={isValid ? 'primary' : 'secondary'}
          disabled={!isValid}
          loading={isSubmitting}
          fullWidth
        >
          Register
        </Button>
      </div>
      <div className="mt-6">
        <div className="flex items-center gap-2">
          <hr className="w-full border-[#4A5465]" />
          <span className="font-industry text-white">OR</span>
          <hr className="w-full border-[#4A5465]" />
        </div>
      </div>
      <OAuth2 />
      <div className="mt-6 text-center">
        <Text size="base" className="font-semibold text-white">
          Have an account?
        </Text>
        <NextLink
          {...(shallowRouting
            ? { href: '', as: '/signin', shallow: true }
            : { href: '/signin' })}
        >
          <a className="mt-0.5 font-industry font-semibold uppercase text-[#FAA806] text-opacity-50 decoration-2 underline-offset-[3px] hover:underline">
            <span className="text-[#FAA806]">Log in here</span>
          </a>
        </NextLink>
      </div>
    </form>
  );
};

export default SignUpForm;