export const fetchChatbotData = async (query: string) => {
    try {
      const response = await fetch(`/api/query?q=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error("Failed to fetch data");
  
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  