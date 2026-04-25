import supabase from "../utils/supabaseClient";
import type { Session } from "@supabase/supabase-js";
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
      emailRedirectTo: "http://localhost:5173/verify-account",
      data: {
        firstname: firstName,
        lastname: lastName,

        hotelname: hotelName,
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

export const getCurrentSession = async (): Promise<Session | null> => {
  const { error, data } = await supabase.auth.getSession();

  if (error) throw error;

  return data.session;
};

export const getProfile = async (userId: string) => {
  const { error, data } = await supabase
    .from("profiles")
    .select("*, Hotels(name, image)")
    .eq("id", userId)
    .single();

  if (error) throw error;

  return data;
};
