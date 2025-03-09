import Grid from "./components/Grid";
import Hero from "./components/Hero";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <style>{`body { background-color: white !important; color: black !important; }`}</style>
      <Layout>
        <main>
          <Hero />
          <Grid />
        </main>
      </Layout>
    </>
  );
}

export default App;
