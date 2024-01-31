function NavPart() {
    return (
        <nav aria-label="..." className="pt-3">
            <ul className="pagination grid-3">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabindex="-1">Previous</a>
                </li>
                <li className="page-item active">
                    <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
                </li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">5</a></li>
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavPart
