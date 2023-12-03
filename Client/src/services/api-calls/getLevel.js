import level from "../api/level.json"

const getLevel = async () => {
    try {;
      const data = level;
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
export default getLevel;