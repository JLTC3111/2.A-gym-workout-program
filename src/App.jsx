import Grid from "./components/Grid"
import Hero from "./components/Hero"
import Layout from "./components/Layout"

function App() {
  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh", color: "black" }}></div>
  );

    return (

    <Layout>
      <main>
        <Hero />
        <Grid />
      </main>
    </Layout>
  )
}

export default App
