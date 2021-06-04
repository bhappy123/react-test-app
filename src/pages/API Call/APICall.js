import React, { useState, useEffect } from "react";
import axios from 'axios';

const APICall = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios
            .get(
                `https://dummyapi.io/data/api/user?page=1&limit=10`,
                {
                    headers: { 'app-id': '600d876c6f7ee671acb1b70b' },
                },
            )
            .then((res) => {
                setData(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])
    return (<div className="py-5 bg-dark-grey text-center"><h1 className="text-ligh-blue">API Call</h1>
        {!data ? <h2 className="pt-10">Loading...</h2> : (
            <table className="text-center" style={{ width: '100%', marginTop: '50px' }}>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Title</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((person, index) => (
                        <tr key={index} style={{ height: '60px' }}>
                            <td>{++index}</td>
                            <td>{person.title}</td>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>);
};

export default APICall;
