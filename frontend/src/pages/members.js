import MembersList from "../components/members-list";

const Members = () => {
    return (
        <>
            <div>
                <header>
                    <h2 className="display-4 text-center fw-bold mt-5">Members</h2>
                </header>
                <MembersList/>
            </div>
        </>
    )
}

export default Members;