const getUserList = async () => {
    try {;
      const fetchData = await fetch('https://64527853bce0b0a0f747e24c.mockapi.io/api/account');
      const data = await fetchData.json();
      console.log("data account",data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
export default getUserList;