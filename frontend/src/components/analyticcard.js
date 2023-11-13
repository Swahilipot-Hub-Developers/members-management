const AnalyticCard = () => {
    return (
        <div className="col">
            <div className="card">
                <div className="card-title">
                    <h6 className="text-left fw-bold px-3 mt-3">[Record to display]</h6>
                    <p className="text-muted px-3 m-0">[Date to be displayed]</p>
                </div>
                <div className="card-body bg-light">
                    <p className="text-center fw-bold p-5 m-0">No record to display at the moment!</p>
                </div>
            </div>
        </div>
    )
}

export default AnalyticCard;