import React, {useState,useEffect} from 'react';
import Usercard from './Usercard';

const UseEffectAPI = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        // const data = await response.json();

        // console.log(data);
        setUsers(await response.json())

    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h3 className="text-center mt-2">List of github Users</h3>
            <div className="container mt-5">
                <div className="row">
                    {
                        users.map(
                            (currElem) => {
                                return <Usercard key={currElem.id}  url={currElem.thumbnailUrl}  website={currElem.website} zip={currElem.zipcode} city={currElem.city} street={currElem.street} />
                            }
                        )
                    }
                </div>
            </div>
            
        </>
    )
}
export default UseEffectAPI;

{/* <Usercard /> */}