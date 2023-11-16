import AnalyticCard from "../components/analyticcard";

const name = "{Administrator}";

const Home = () => {
  return (
    <>
      <div className="mt-5">
        <header>
          <h2 className="text-center display-5 fw-bold">Dashboard</h2>
          <h6 className="my-5 display-6">Welcome, {name}</h6>
        </header>
        <div className="d-flex gap-3">
          <AnalyticCard/>
          <AnalyticCard/>
          <AnalyticCard/>
          <AnalyticCard/>
        </div>
      </div>
    </>
  )
}

export default Home;
