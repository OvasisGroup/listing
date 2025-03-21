"use client";

import { useState, useEffect } from "react";

export default function UserProfilesPage() {
    const [profile, setProfile] = useState({
        name: "",
        image: "",
        location: "",
        about: "",
        telephone: "",
    });
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        // Fetch the profile data
        const fetchProfile = async () => {
            try {
                const response = await fetch("/api/profile", {
                    headers: {
                        "user-id": "userId", // Replace with actual user ID logic
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setProfile(data.data);
                } else {
                    const errorData = await response.json();
                    setErrorMessage(errorData.error || "Failed to fetch profile.");
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
                setErrorMessage("An unexpected error occurred.");
            }
        };

        fetchProfile();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProfile((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const response = await fetch("/api/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "user-id": "userId", // Replace with actual user ID logic
                },
                body: JSON.stringify(profile),
            });

            if (response.ok) {
                const data = await response.json();
                setSuccessMessage("Profile updated successfully!");
                setProfile(data.data);
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.error || "Failed to update profile.");
            }
        } catch (error) {
            console.log("Failed to update profile:", error);    
            setErrorMessage("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>

            {/* User Details Section */}
            <div className="mb-8 p-4 border rounded-md shadow-sm bg-gray-50">
                <h2 className="text-lg font-semibold mb-2">Profile Details</h2>
                <div className="flex items-center mb-4">
                    {profile.image ? (
                        <img
                            src={profile.image}
                            alt="Profile"
                            className="w-16 h-16 rounded-full mr-4"
                        />
                    ) : (
                        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 mr-4">
                            No Image
                        </div>
                    )}
                    <div>
                        <p className="text-sm font-medium text-gray-700">Name: {profile.name || "N/A"}</p>
                        <p className="text-sm text-gray-600">Location: {profile.location || "N/A"}</p>
                        <p className="text-sm text-gray-600">Telephone: {profile.telephone || "N/A"}</p>
                    </div>
                </div>
                <p className="text-sm text-gray-600">About: {profile.about || "N/A"}</p>
            </div>

            {/* Profile Update Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Image URL
                    </label>
                    <input
                        type="url"
                        id="image"
                        name="image"
                        value={profile.image}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={profile.location}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        About
                    </label>
                    <textarea
                        id="about"
                        name="about"
                        value={profile.about}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
                        Telephone
                    </label>
                    <input
                        type="text"
                        id="telephone"
                        name="telephone"
                        value={profile.telephone}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        {loading ? "Updating..." : "Update Profile"}
                    </button>
                </div>

                {successMessage && <p className="text-sm text-green-600">{successMessage}</p>}
                {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}
            </form>
        </div>
    );
}