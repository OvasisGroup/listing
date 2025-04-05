"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function CreateHowWeHelpForm() {
    const [formData, setFormData] = useState({
        title: "",
        body: "",
    });

    const [image, setImage] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            if (name === "image") setImage(files[0]);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        const formDataToSend = new FormData();
        formDataToSend.append("title", formData.title);
        formDataToSend.append("body", formData.body);
        if (image) formDataToSend.append("image", image);

        try {
            const response = await fetch("/api/whoweserve", {
                method: "POST",
                body: formDataToSend,
            });

            if (response.ok) {
                const data = await response.json();
                console.log("How We Help created:", data);
                setSuccessMessage("How We Help created successfully!");
                setFormData({
                    title: "",
                    body: "",
                });
                setImage(null);
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.error || "Failed to create category.");
            }
        } catch (error) {
            console.error("Failed to create How We Help:", error);
            setErrorMessage("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium">
                    Title
                </label>
                <Input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-primary shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>


            <div>
                <label htmlFor="body" className="block text-sm font-medium">
                    Description
                </label>
                <Textarea
                    id="body"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-primary  focus:border-primary focus:ring-green-600 sm:text-sm"
                />
            </div>

            <div>
                <label htmlFor="image" className="block text-sm font-medium">
                    Image
                </label>
                <Input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mt-1 block w-full border-1 border-primary shadow-none"
                />
            </div>

            <div>
                <Button
                    type="submit"
                    disabled={loading}
                    className="inline-flex justify-center rounded-md border border-transparent bg-primary w-full py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    {loading ? "Creating..." : "Create Category"}
                </Button>
            </div>

            {successMessage && <p className="text-sm text-green-600">{successMessage}</p>}
            {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}
        </form>
    );
}