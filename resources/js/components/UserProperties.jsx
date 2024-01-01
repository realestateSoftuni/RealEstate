import UserLayout from "../components/UserLayout/UserLayout.jsx";
import {Link} from "react-router-dom";


const deleteHandler = (collection) => {
    if (collection === 'my-properties') {
        console.log("Deleted from 'My properties' collection")
    } else if (collection === 'favorites') {
        console.log("Deleted from 'Favorite properties' collection")
    }
}

function UserProperties(props) {

    return(
        <UserLayout>
            <div className="my-properties">
                <table className="table-responsive">
                    <thead>
                    <tr>
                        <th className="pl-2">My Properties</th>
                        <th className="p-0"></th>
                        <th>Date Added</th>
                        <th>Views</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="image myelist">
                            <a href="single-property-1.html"><img alt="my-properties-3" src="images/feature-properties/fp-1.jpg" className="img-fluid"/></a>
                        </td>
                        <td>
                            <div className="inner">
                                <a href="single-property-1.html"><h2>Luxury Villa House</h2></a>
                                <figure><i className="lni-map-marker"></i> Est St, 77 - Central Park South, NYC</figure>
                                <ul className="starts text-left mb-0">
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="ml-3">(6 Reviews)</li>
                                </ul>
                            </div>
                        </td>
                        <td>08.14.2020</td>
                        <td>163</td>
                        <td className="actions">
                            {props.collection === 'my-properties' && <Link to="#" className="edit edit-property"><i className="lni-pencil"></i>Edit</Link>}
                            <button onClick={() => deleteHandler(props.collection)} className='delete-property'><i className="far fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td className="image">
                            <a href="single-property-1.html"><img alt="my-properties-3" src="images/feature-properties/fp-2.jpg" className="img-fluid"/></a>
                        </td>
                        <td>
                            <div className="inner">
                                <a href="single-property-1.html"><h2>Luxury Villa House</h2></a>
                                <figure><i className="lni-map-marker"></i> Est St, 77 - Central Park South, NYC</figure>
                                <ul className="starts text-left mb-0">
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="ml-3">(6 Reviews)</li>
                                </ul>
                            </div>
                        </td>
                        <td>08.14.2020</td>
                        <td>202</td>
                        <td className="actions">
                            {props.collection === 'my-properties' && <Link to="#" className="edit edit-property"><i className="lni-pencil"></i>Edit</Link>}
                            <button onClick={() => deleteHandler(props.collection)} className='delete-property'><i className="far fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td className="image">
                            <a href="single-property-1.html"><img alt="my-properties-3" src="images/feature-properties/fp-3.jpg" className="img-fluid"/></a>
                        </td>
                        <td>
                            <div className="inner">
                                <a href="single-property-1.html"><h2>Luxury Villa House</h2></a>
                                <figure><i className="lni-map-marker"></i> Est St, 77 - Central Park South, NYC</figure>
                                <ul className="starts text-left mb-0">
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="ml-3">(6 Reviews)</li>
                                </ul>
                            </div>
                        </td>
                        <td>08.14.2020</td>
                        <td>412</td>
                        <td className="actions">
                            {props.collection === 'my-properties' && <Link to="#" className="edit edit-property"><i className="lni-pencil"></i>Edit</Link>}
                            <button onClick={() => deleteHandler(props.collection)} className='delete-property'><i className="far fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td className="image">
                            <a href="single-property-1.html"><img alt="my-properties-3" src="images/feature-properties/fp-4.jpg" className="img-fluid"/></a>
                        </td>
                        <td>
                            <div className="inner">
                                <a href="single-property-1.html"><h2>Luxury Villa House</h2></a>
                                <figure><i className="lni-map-marker"></i> Est St, 77 - Central Park South, NYC</figure>
                                <ul className="starts text-left mb-0">
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="ml-3">(6 Reviews)</li>
                                </ul>
                            </div>
                        </td>
                        <td>08.14.2020</td>
                        <td>675</td>
                        <td className="actions">
                            {props.collection === 'my-properties' && <Link to="#" className="edit edit-property"><i className="lni-pencil"></i>Edit</Link>}
                            <button onClick={() => deleteHandler(props.collection)} className='delete-property'><i className="far fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td className="image">
                            <a href="single-property-1.html"><img alt="my-properties-3" src="images/feature-properties/fp-5.jpg" className="img-fluid"/></a>
                        </td>
                        <td>
                            <div className="inner">
                                <a href="single-property-1.html"><h2>Luxury Villa House</h2></a>
                                <figure><i className="lni-map-marker"></i> Est St, 77 - Central Park South, NYC</figure>
                                <ul className="starts text-left mb-0">
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="ml-3">(6 Reviews)</li>
                                </ul>
                            </div>
                        </td>
                        <td>08.14.2020</td>
                        <td>325</td>
                        <td className="actions">
                            {props.collection === 'my-properties' && <Link to="#" className="edit edit-property"><i className="lni-pencil"></i>Edit</Link>}
                            <button onClick={() => deleteHandler(props.collection)} className='delete-property'><i className="far fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td className="image">
                            <a href="single-property-1.html"><img alt="my-properties-3" src="images/feature-properties/fp-6.jpg" className="img-fluid"/></a>
                        </td>
                        <td>
                            <div className="inner">
                                <a href="single-property-1.html"><h2>Luxury Villa House</h2></a>
                                <figure><i className="lni-map-marker"></i> Est St, 77 - Central Park South, NYC</figure>
                                <ul className="starts text-left mb-0">
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star"></i>
                                    </li>
                                    <li className="mb-0"><i className="fa fa-star-o"></i>
                                    </li>
                                    <li className="ml-3">(6 Reviews)</li>
                                </ul>
                            </div>
                        </td>
                        <td>08.14.2020</td>
                        <td>247</td>
                        <td className="actions">
                            {props.collection === 'my-properties' && <Link to="#" className="edit edit-property"><i className="lni-pencil"></i>Edit</Link>}
                            <button onClick={() => deleteHandler(props.collection)} className='delete-property'><i className="far fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="pagination-container">
                    <nav>
                        <ul className="pagination">
                            <li className="page-item"><a className="btn btn-common" href="#"><i className="lni-chevron-left"></i> Previous </a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="btn btn-common" href="#"> Next <i className="lni-chevron-right"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </UserLayout>
    );
}

export default UserProperties
