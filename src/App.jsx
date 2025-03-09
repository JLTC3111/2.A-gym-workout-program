import Grid from "./components/Grid";
import Hero from "./components/Hero";
import Layout from "./components/Layout";

function App() {
  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh", color: "black", padding: "20px" }}>
      <Layout>
        <main>
          <Hero />
          <Grid />
        </main>
      </Layout>
    </div>
  );
}

export default App;
