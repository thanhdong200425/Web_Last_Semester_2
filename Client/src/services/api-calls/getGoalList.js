import image_goal from "../api/image_goal.json"

const getGoalList = async () => {
    try {;
      const data = image_goal;
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
export default getGoalList;