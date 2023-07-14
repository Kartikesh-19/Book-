import {withErrorBoundary} from 'react-error-boundary'
import { ErrorFallback } from '.';
const ErrorHandling = (ComponentThatMayError) => {
    return withErrorBoundary(ComponentThatMayError, {
        FallbackComponent: ErrorFallback,
        onError(error, info) {
          console.log("onError error ErrorBoundary",error)
          console.log("info",info)
        },
      })
}

export default ErrorHandling;