import { useEffect, useState } from "react";

interface Section {
  id: string;
  title: string;
  body: string;
}

const TableOfContents = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch content from API
    const fetchContent = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/legal`);
        const data = await response.json();
        setSections(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching content:", error);
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ml-0 md:ml-64 p-4">
      {sections.map((section) => (
        <section id={section.id} key={section.id} className="mb-8">
          <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
          <p>{section.body}</p>
        </section>
      ))}
    </div>
  );
};

export default TableOfContents;
