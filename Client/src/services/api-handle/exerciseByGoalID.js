import getExerciseList from '../api-calls/getExerciseList';
import getGoalList from '../api-calls/getGoalList';

function exerciseByGoalID(id, level) {
    const handle = async () => {
        let goal = await getGoalList();
        goal = goal.find((element) => element.id === Number(id)).goal;
        let exercise = await getExerciseList();
        exercise = exercise.filter((element) => element.goal === goal && element.level === level);
        console.log(exercise)
        return exercise;
    };
    return handle();
}

export default exerciseByGoalID;
