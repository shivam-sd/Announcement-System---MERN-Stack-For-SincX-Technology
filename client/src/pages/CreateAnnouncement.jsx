import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const CreateAnnouncement = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/announcements`,
                {
                    title,
                    description,
                    date: new Date(), // optional if backend is auto-setting
                }
            );

            console.log("Announcement created successfully:", response.data);
            toast.success("Announcement created successfully");
            setTitle('');
            setDescription('');
            navigate('/'); // Redirect to home
        } catch (error) {
            console.error("Error creating announcement:", error);
            toast.error("Failed to create announcement");
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Create Announcement</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter announcement title"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                        Description
                    </label>
                    <textarea
                        id="description"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter announcement description"
                        rows={4}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition cursor-pointer"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateAnnouncement;
