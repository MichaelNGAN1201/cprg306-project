const fetchData = async (category) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${category}`);
      const data = await response.json();
      return data.docs;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };
  
  export default fetchData;
  