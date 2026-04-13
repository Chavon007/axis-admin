import supabase from "../utils/supabaseClient";
import type { SignupDetails, LoginDetails } from "../types/auth";

export const supabaseSignup = async ({
  firstName,
  lastName,
  email,
  password,
  hotelName,
  policy,
  role,
}: SignupDetails) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
        email,
        password,
        hotelName,
        policy,
        role,
      },
    },
  });

  if (error) throw error;

  return data;
};

export const supabaseLogin = async ({ email, password }: LoginDetails) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;

  return data;
};

export const supabaseSignout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
};
