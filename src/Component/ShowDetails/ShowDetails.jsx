import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [formData, setFormData] = useState({
        movieName: '',
        movieDetails: '',
    });
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then((response) => response.json())
            .then((data) => setShow(data))
            .catch((error) => console.log(error));
    }, [id]);

    useEffect(() => {
        const storedFormData = JSON.parse(localStorage.getItem('formData'));
        if (storedFormData) {
            setFormData(storedFormData);
        }
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleBookTicket = () => {
        const { name: movieName, language: movieLanguage, summary: movieDetails } = show;
        setFormData({
            movieName,
            movieLanguage,
            movieDetails,
        });
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('formData', JSON.stringify(formData));
        handleCloseModal(); // Close the modal after submitting the form
    };

    if (!show) {
        return <div>Loading...</div>;
    }

    return (
        <div className='m-2'>
            <h1 className='font-semibold text-xl'>{show.name}</h1>
            <div className="p-4 border border-gray-300 rounded-lg">
                <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
                <button
                    className="px-4 py-2 mt-4 bg-blue-500 text-white rounded"
                    onClick={handleBookTicket}
                >
                    Book Ticket
                </button>
            </div>

            {/* Ticket Booking Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="p-6 bg-white rounded shadow">
                        <h2 className="text-xl font-semibold">Book Ticket</h2>
                        <form onSubmit={handleSubmit} className="mt-4">
                            <div className="mb-4">
                                <label htmlFor="movieName" className="block font-medium mb-1">
                                    Movie Name
                                </label>
                                <input
                                    type="text"
                                    id="movieName"
                                    name="movieName"
                                    defaultValue={formData.movieName}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="movieLanguage" className="block font-medium mb-1">
                                    Language
                                </label>
                                <input
                                    type="text"
                                    id="movieLanguage"
                                    name="movieLanguage"
                                    defaultValue={formData.movieLanguage}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="movieCategory" className="block font-medium mb-1">
                                    Category
                                </label>
                                <input
                                    type="text"
                                    id="movieCategory"
                                    name="movieCategory"
                                    defaultValue={formData.movieCategory}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowDetails;
