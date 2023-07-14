export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  console.log("test");
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
};
