import Image from 'next/image';

const MemberRegistration = () => {
    return(
        <div className="mt-5 mb-5 pt-2" style={{minHeight: '73vh'}}>
            <header className="text-center mb-4">
                <Image
                src="/assets/logo.png"
                height={70}
                width={300}
                alt="SPH Logo"
                />
            </header>
            <form className="container" style={{ width: '70%', margin: 'auto'}}>
                <h3 className="mt-4 fs-3 fw-bold text-center mb-2">Register an account (Member)</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Gender</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Year of Birth</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">County</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Sub-county</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default MemberRegistration;