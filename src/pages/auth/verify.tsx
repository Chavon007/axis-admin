import { useEffect } from "react";
import useAuth from "../../hooks/authHooks";

export function VerifyPage() {
  const { verifyAccount, verifyLoading, error, success } = useAuth();
  const hasToken = window.location.hash.includes("access_token");
  useEffect(() => {
    if (hasToken) {
      verifyAccount();
    }
  }, []);

  if (hasToken) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        {/* logo */}
        <section className="flex justify-center items-center">
          <img src="" alt="" className="w-12 h-12 object-contain" />
        </section>

        <div className="flex flex-col justify-center items-center p-10 bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-md gap-6">
          {verifyLoading && (
            <section className="flex flex-col justify-center items-center gap-4">
              {/* spinner */}
              <div className="w-8 h-8 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin" />

              <div className="flex flex-col justify-center items-center gap-2 text-center">
                <h2 className="text-2xl font-bold text-white">
                  Verifying your account
                </h2>
                <p className="text-sm text-gray-400 font-light">
                  Check your email, click on the link sent to you to verify your
                  account
                </p>
              </div>
            </section>
          )}

          {!verifyLoading && error && <p className="text-center text-xs text-red-500">{error}</p>}

          {!verifyLoading && success && (
            <p className="text-center text-xs text-green-500">{success}</p>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 w-full max-w-md flex flex-col items-center gap-6 text-center">
        <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-indigo-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h2 className="text-4xl font-montserra font-bold text-white">
          Check your email
        </h2>
        <p className="text-sm text-gray-200 font-light font-lato">
          We sent a verification link to your email. Click it to activate your
          account.
        </p>
        <p className="text-xs text-gray-600">
          Didn't receive it? Check your spam folder.
        </p>
      </div>
    </div>
  );
}
