import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ShowList = () => {

    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then((response) => response.json())
            .then((data) => setShows(data))

    }, []);
    console.log(shows)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 m-2 ">
            {
                shows.map(show => {
                    return <div list={show} key={show.id} className="border-2 card bg-white rounded-lg shadow-md p-2  sm:col-span-1 lg:flex">
                        <div className="card_left">
                            <img
                                src={show.show.image?.medium}
                                alt="Poster"
                                className="w-48"
                            />
                        </div>
                        <div className="card_right  ml-4">
                            <h1 className="text-2xl font-bold mb-2"> {show.show.name}</h1>
                            <div className="card_right__details mb-4">
                                <ul className="text-sm mb-2">
                                    <li>{show.show.ended}</li>
                                    <li>{show.show.schedule.time} min</li>

                                </ul>

                            </div>
                            <div>
                                <p>
                                    {show.show.status}
                                </p>
                            </div>
                            <div className="mb-2">

                                <Link className="btn py-1 px-2 lg:px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 m-2" to={`/details/${show.show.id}`}><p>Showdetails</p></Link>
                            </div>

                        </div>
                    </div>
                    // return <div className="items-center justify-center text-center " list={show} key={show.id}>
                    //     <div>
                    //         <div className=" border-2 m-2 ">
                    //             <img className="w-full" src={show.show.image?.medium} alt="" />
                    //             <h1 className='text-xl font-sans'>{show.show.name}</h1>
                    //             <Link className="btn  py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 m-2" to={`/details/${show.show.id}`}><p>Showdetails</p></Link>

                    //         </div>

                    //     </div>
                    // </div>
                })
            }
        </div>
    );
};

export default ShowList;