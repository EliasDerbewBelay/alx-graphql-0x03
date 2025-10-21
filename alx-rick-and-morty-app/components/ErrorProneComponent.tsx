import { useState } from "react";

const ErrorProneComponent: React.FC = () => {
  const [shouldError, setShouldError] = useState(false);


  if (shouldError) {
    throw new Error("This is a test error from ErrorProneComponent!");
  }

  return (
    <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
      <h3 className="text-lg font-semibold text-yellow-800 mb-2">
        Error Testing Component
      </h3>
      <p className="text-yellow-700 mb-4">
        Click the button below to trigger a test error that will be caught by
        ErrorBoundary and logged to Sentry.
      </p>
      <button
        onClick={() => setShouldError(true)}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
      >
        Trigger Test Error
      </button>
    </div>
  );
};

export default ErrorProneComponent;
