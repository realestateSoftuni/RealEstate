import UserLayout from "../components/UserLayout/UserLayout.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import loader from "../../assets/loader.gif";

// const initialData = { title: 'Apartment 1', description: 'test', status: 'Rent', yard: true}


const deleteHandler = async (collection, propertyId) => {
    if (collection === 'my-properties') {
        try {
            const response = await axios.delete(`${window.Laravel.apiUrl}/api/delete_property/${propertyId}`);
            console.log(`Property with id: ${propertyId} has been deleted from 'My properties' collection`)
        } catch (err) {
            console.log(err);
        }
    } else if (collection === 'favorites') {
        console.log(`Property with id: ${propertyId} has been deleted from 'Favorite properties' collection`)
    }
}

function UserProperties(props) {
    const[propertiesList, setPropertiesList] = useState({});
    const[initialData, setInitialData] = useState({});
    const userId = '1';
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async (collection, userId) => {
            try {
                const response = await axios.get(`${window.Laravel.apiUrl}/api/${collection}/${userId}`);
                setPropertiesList(response.data);
            } catch (err) {
                navigate('/');
                console.log(err);
            }
        };
        fetchData(props.collection, userId);
    }, [userId]);

    const editHandler = async(propertyId) => {
        try {
            const response = await axios.get(`${window.Laravel.apiUrl}/api/properties/${propertyId}`);
            setInitialData(response.data);
            navigate('/edit-property', {state: { action: 'edit', initialData: response.data }})
            console.log(response.data)
        } catch (err) {
            navigate('/*');
            console.log(err);
        }
    }

    if (!propertiesList.length) {
        return (
            <div className='loading-container'>
                <img src={loader}/>
                <p>Loading . . . </p>
            </div>)
    }

    return(
        <UserLayout>
            <div className="my-properties">
                <table className="table-responsive">
                    <thead>
                    <tr>
                        <th className="pl-2">My Properties</th>
                        <th className="p-0"></th>
                        <th>Year</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {propertiesList.map((property) =>
                        <tr key={property.id}>
                            <td className="image myelist">
                                <Link to={`/property/${property.id}`}><img alt="my-properties-3" src={property.property_photos[0].photo_url} className="img-fluid"/></Link>
                            </td>
                            <td>
                                <div className="inner">
                                    <Link to={`/property/${property.id}`}><h2>{property.title}</h2></Link>
                                    <figure><i className="lni-map-marker"></i> {property.country}, {property.city}</figure>
                                    {/*<ul className="starts text-left mb-0">*/}
                                    {/*    <li className="mb-0"><i className="fa fa-star"></i>*/}
                                    {/*    </li>*/}
                                    {/*    <li className="mb-0"><i className="fa fa-star"></i>*/}
                                    {/*    </li>*/}
                                    {/*    <li className="mb-0"><i className="fa fa-star"></i>*/}
                                    {/*    </li>*/}
                                    {/*    <li className="mb-0"><i className="fa fa-star"></i>*/}
                                    {/*    </li>*/}
                                    {/*    <li className="mb-0"><i className="fa fa-star"></i>*/}
                                    {/*    </li>*/}
                                    {/*    <li className="ml-3">(6 Reviews)</li>*/}
                                    {/*</ul>*/}
                                </div>
                            </td>
                            <td>{property.build}</td>
                            <td>{property.status === 'Rent' ? 'For Rent' : 'For Sale'}</td>
                            <td className="actions">
                                {props.collection === 'my-properties' && <button onClick={() => editHandler(property.id)} className="edit edit-property"><i className="lni-pencil"></i>Edit</button>}
                                <button onClick={() => deleteHandler(props.collection, property.id)} className='delete-property'><i className="far fa-trash-alt"></i></button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
                {propertiesList.length > 10 && <div className="pagination-container">
                    <nav>
                        <ul className="pagination">
                            <li className="page-item"><a className="btn btn-common" href="#"><i className="lni-chevron-left"></i> Previous </a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="btn btn-common" href="#"> Next <i className="lni-chevron-right"></i></a></li>
                        </ul>
                    </nav>
                </div>}
            </div>
        </UserLayout>
    );
}

export default UserProperties
