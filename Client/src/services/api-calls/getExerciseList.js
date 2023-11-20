import exercise from '../api/exercise.json'

const getExerciseList = async () => {
    try {
        const data = exercise;
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default getExerciseList;
