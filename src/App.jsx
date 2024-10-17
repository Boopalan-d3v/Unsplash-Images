import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import ThemeToggle from "./components/ThemeToggle";
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'

const App = () => {

  const queryClient = new QueryClient()

  return <main>
    <QueryClientProvider client={queryClient}>
      <ThemeToggle/>
      <SearchForm/>
      <Gallery/>
    </QueryClientProvider>
  </main>;
};
export default App;
