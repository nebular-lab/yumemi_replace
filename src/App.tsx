import { Suspense } from 'react';
import { AppProviders } from './providers/AppProviders';
import { ErrorBoundary } from 'react-error-boundary';
import Spinner from './components/Spinner';
import ChartPage from './ChartPage';
import { Header } from './components/Header';

const ErrorFallback = ({ error }: { error: Error }) => (
  <div>
    <h2>エラーが発生しました</h2>
    <p>{error.message}</p>
  </div>
);

const App = () => {
  return (
    <AppProviders>
      <Header />
      <ErrorBoundary
        fallbackRender={({ error }) => <ErrorFallback error={error} />}
      >
        <Suspense fallback={<Spinner />}>
          <ChartPage />
        </Suspense>
      </ErrorBoundary>
    </AppProviders>
  );
};

export default App;
