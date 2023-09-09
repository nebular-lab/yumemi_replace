import { Suspense } from 'react';
import { AppProviders } from './providers/AppProviders';
import { ErrorBoundary } from 'react-error-boundary';
import Spinner from './components/Spinner';

const ErrorFallback = ({ error }: { error: Error }) => (
  <div>
    <h2>エラーが発生しました</h2>
    <p>{error.message}</p>
  </div>
);

const App = () => {
  return (
    <AppProviders>
      <h1>ゆめみ コーディングテスト</h1>
      <ErrorBoundary
        fallbackRender={({ error }) => <ErrorFallback error={error} />}
      >
        <Suspense fallback={<Spinner />}>{/* <ChartPage /> */}</Suspense>
      </ErrorBoundary>
    </AppProviders>
  );
};

export default App;
