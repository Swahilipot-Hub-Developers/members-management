const AnalyticCard = ({count}) => {
    return (
        <div className="col">
            <div className="card">
                <div className="card-title p-4">
                    <h6 className="text-left fw-bold px-3 mt-3">Total Members</h6>
                    <p className="text-primary fw-bold px-3 m-0">{count}</p>
                </div>
            </div>
        </div>
    )
}

export default AnalyticCard;