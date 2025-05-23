"use client";

import MainCategoriesSidebar from "@/components/general/MainCategoriesSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { List } from "lucide-react";

type SubCategory = {
  id: string;
  name: string;
};

type Category = {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  subCategories: SubCategory[];
};

type Pagination = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export default function CategoryDetail() {
  const { id } = useParams();
  const [category, setCategory] = useState<Category | null>(null);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCategory = async (page: number) => {
    try {
      const res = await fetch(`/api/categories/${id}?page=${page}`);
      if (!res.ok) throw new Error("Failed to fetch category");
      const data = await res.json();
      setCategory(data.data);
      setPagination(data.pagination);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchCategory(currentPage);
  }, [id, currentPage]);

  useEffect(() => {
    const preventActions = (e: Event) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && (e.key === "c" || e.key === "u")) e.preventDefault();
    };
    document.addEventListener("contextmenu", preventActions);
    document.addEventListener("copy", preventActions);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("contextmenu", preventActions);
      document.removeEventListener("copy", preventActions);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= (pagination?.totalPages || 1)) {
      setCurrentPage(newPage);
      setLoading(true);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-4 animate-pulse space-y-4">
        <div className="h-8 bg-gray-300 rounded w-1/3"></div>
        <div className="h-5 bg-gray-300 rounded w-2/3"></div>
        <div className="h-64 bg-gray-200 rounded-lg"></div>
        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-10 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!category) return <div>No category found</div>;

  return (
    <div className="container mx-auto p-4 md:px-0">
      <div className="flex md:flex-row flex-col md:justify-between md:items-center py-6 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-primary">All Categories</h1>
          <p>
            Looking for Professional Service Provider or{" "}
            <Link href="/jobs" className="underline text-blue-500">
              Open Job Opportunity?
            </Link>
          </p>
        </div>
        <div className="mt-4">
          <Link href="/post-job">
            <Button className="rounded-sm font-bold text-white">
              Post A Service Request
            </Button>
          </Link>
        </div>
      </div>

      <form className="flex gap-2 mb-6">
        <Input placeholder="Search for categories" />
        <Button className="text-white">Search</Button>
      </form>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-grey">
          <Image
            src={category.image}
            alt={category.name}
            width={1000}
            height={100}
            unselectable="off"
            className="mb-4 w-full rounded-2xl pointer-events-none select-none"
          />
          <h1 className="text-2xl font-bold mb-4 text-primary">{category.name}</h1>
          <p>{category.description}</p>

          <div className="border-b border-primary mt-4 mb-4"></div>

          <h2 className="text-2xl font-semibold mb-4 text-primary">Subcategories</h2>
          {category.subCategories.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {category.subCategories.map((sub) => (
                <AlertDialog key={sub.id}>
                  <AlertDialogTrigger asChild>
                    <Button className="border rounded-4xl px-4 py-2 text-white hover:bg-green-50 hover:text-black">
                      {sub.name}
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <h2 className="text-lg font-bold">Subcategory Details</h2>
                      <p>
                        Do you want to post a job with{" "}
                        <span className="font-bold text-primary">{sub.name}</span>?
                      </p>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <Button asChild className="text-white">
                        <Link href={`/post-job/${sub.id}`}>Confirm</Link>
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No subcategories available.</p>
          )}

          <div className="border-b border-primary mt-6 mb-4"></div>

          {/* Pagination */}
          <div className="flex justify-between items-center">
            <div>
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                className="bg-secondary text-black mr-2"
              >
                Previous
              </Button>
              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= (pagination?.totalPages || 1)}
                className="bg-secondary text-black"
              >
                Next
              </Button>
            </div>
            <span className="font-bold">
              Showing Page {currentPage} of {pagination?.totalPages}
            </span>
          </div>
        </div>

        <div className="rounded-2xl">
          <div className="md:pl-8">
            <h2 className="font-bold text-primary text-2xl pb-4">Major Categories</h2>
          </div>
          <MainCategoriesSidebar />
          <Link href="/allCategories">
            <Button className="mx-8 rounded-sm font-bold text-white w-full mt-4">
              <List className="mr-2" /> All Categories
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
