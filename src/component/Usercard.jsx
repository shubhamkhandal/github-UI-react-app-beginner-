import React from 'react';

const Usercard = (props) => {
    return (
        <>
            <div className="col-10 col-md-4 mt-5">
                        <div className="card p-1">
                            <div className="d-flex align-items-center">
                                <div className="image p-2">
                                    <img src={props.url} alt="user img" className="rounded" width="100"/>
                                </div>
                                <div  className="w-100">
                                    <h4 className="mb-0 mt-0 text-left">{props.name}</h4>
                                    <span className="text-right">{props.website}</span>

                                    <div className="bg-light p-2 mt-2 d-flex justify-content-between rounded">
                                        <div className="d-flex flex-column">
                                            <span>Zipcode</span><span>{props.zipcode}</span>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span>City</span><span>{props.city}</span>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span>Street</span><span>{props.street}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
        </>
    )
}
export default Usercard;