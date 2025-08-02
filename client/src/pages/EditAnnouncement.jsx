import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditAnnouncement = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  // 🔄 Fetch announcement by ID
  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/announcements/${id}`);
        const { title, description, date } = response.data;

        setTitle(title || '');
        setDescription(description || '');
        setDate(date ? date.split('T')[0] : ''); // format date for input
      } catch (error) {
        console.error("Error fetching announcement:", error);
        toast.error("Failed to fetch announcement.");
      }
    };

    fetchAnnouncement();
  }, [id]);

  // ✅ Handle update form submission
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/edit-announcements/${id}`, {
        title,
        description,
        date,
      });

      toast.success("Announcement updated successfully");
      navigate('/');
    } catch (error) {
      console.error("Error updating announcement:", error);
      toast.error("Failed to update announcement.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Update Announcement</h2>
        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              rows={4}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAnnouncement;
