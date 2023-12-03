const getComment = async (id) => {
    try {;
      const fetchData = await fetch('https://648f23c975a96b664444bedc.mockapi.io/api/comment');
      const data = await fetchData.json();
      console.log("comment:" ,data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
export default getComment;