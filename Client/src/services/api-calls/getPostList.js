const getPostList = async () => {
    try {;
      const fetchData = await fetch('https://64527853bce0b0a0f747e24c.mockapi.io/api/post');
      const data = await fetchData.json();
      console.log("data post",data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
export default getPostList;