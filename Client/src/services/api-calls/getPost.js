const getPost = async (id) => {
    try {;
      const fetchData = await fetch('https://64527853bce0b0a0f747e24c.mockapi.io/api/post/' + id);
      const data = await fetchData.json();
      console.log("post " + id + ":" ,data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
export default getPost;