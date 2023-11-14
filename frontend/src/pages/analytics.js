import AnalyticCard from "../components/analyticcard";

const Analytics = () => {
    return (
        <>
            <div className='mb-5'>
                <header>
                    <h2 className="display-4 text-center fw-bold mt-5 mb-5">Analytics</h2>
                </header>
                <div className="row row-cols-2 row-cols-2-md-1 g-4">
                    <AnalyticCard/>
                    <AnalyticCard/>
                    <AnalyticCard/>
                    <AnalyticCard/>
                </div>
            </div>
        </>
    )
}

export default Analytics;