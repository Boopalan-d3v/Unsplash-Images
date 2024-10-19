import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import ThemeToggle from "./components/ThemeToggle";
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const App = () => {

  const queryClient = new QueryClient()

  return <main>
    <QueryClientProvider client={queryClient}>
      <ThemeToggle/>
      <SearchForm/>
      <Gallery/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </main>;
};
export default App;
