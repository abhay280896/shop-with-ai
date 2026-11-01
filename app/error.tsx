"use client";
type ErrType = {
  error: Error & { someProperties?: "string" };
  reset: () => void;
};

const error = ({ error, reset }: ErrType) => {
  return (
    <div>
      {process.env.NODE_ENV === "development" && error.message && (
        <p>{error.message}</p>
      )}

      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default error;
