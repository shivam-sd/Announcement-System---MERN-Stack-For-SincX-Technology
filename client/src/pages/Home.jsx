// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import loader from "../assets/loading.mp4";

const Home = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/announcements`
      );
      setAnnouncements(res.data);
      setLoading(false);
      // console.log('Fetched announcements:', res.data);
    } catch (err) {
      console.error("Error fetching announcements:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this announcement?"))
      return;
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/announcements/${id}`
      );
      fetchAnnouncements(); // refresh list
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Announcements</h1>
        <button
          onClick={() => navigate("/create")}
          className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
        >
          Create New
        </button>
      </div>

      {loading ? (
        <>
          <div className="w-full h-full flex items-center justify-center">
            {/* <div className="loader"> */}
              <video src={loader} autoPlay loop muted className="w-96 h-96"></video>
            {/* </div> */}
          </div>
        </>
      ) : (
        <>
          {announcements.map((announcement) => (
            <div
              key={announcement._id}
              className="border p-4 mb-3 rounded shadow-sm"
            >
              <h2 className="text-xl font-semibold">{announcement.title}</h2>
              <div className="text-gray-500 text-sm mb-2">
                {announcement.date ? formatDate(announcement.date) : ""}
              </div>
              <div
                className="text-gray-700 mt-2"
                dangerouslySetInnerHTML={{
                  __html:
                    announcement.description.length > 150
                      ? announcement.description.slice(0, 150) + "..."
                      : announcement.description,
                }}
              />
              <div className="mt-4 flex gap-2">
                <Link
                  to={`/edit/${announcement._id}`}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(announcement._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
