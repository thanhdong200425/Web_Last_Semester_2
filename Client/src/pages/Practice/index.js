import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getLevel from '~/services/api-calls/getLevel';
import exerciseByGoalID from '~/services/api-handle/exerciseByGoalID';
function Practice() {
    const id = useParams().id;
    const [levels, setLevels] = useState([]);
    const [level, setLevel] = useState('');
    const [exerciseList, setExerciseList] = useState([]);
    useEffect(() => {
        const fechData = async () => {
            const lv = await getLevel();
            setLevels(lv);
            const data = await exerciseByGoalID(id, level);
            setExerciseList(data);
        };
        fechData();
    }, [id, level]);
    useEffect(() => {
        const fechData = async () => {
            const lv = await getLevel();
            setLevels(lv);
            setLevel(lv[0].level);
        };
        fechData();
    }, []);
    return (
        <div className="container">
            <div className="flex flex-col items-center md:flex-row md:justify-start gap-5">
                {levels && levels.length > 0 ? (
                    levels.map((item) => {
                        return (
                            <button
                                key={item.id}
                                onClick={() => setLevel(item.level)}
                                className={
                                    'inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white border border-red-600 rounded-lg h-[60px] w-48' +
                                    (item.level === level ? ' bg-red-600' : '')
                                }
                            >
                                For {item.level}
                            </button>
                        );
                    })
                ) : (
                    <button
                        onClick={() => setLevel('Beginner')}
                        className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white border border-red-600 rounded-lg h-[60px]"
                    >
                        For Beginner
                    </button>
                )}
            </div>
            {exerciseList && exerciseList.length > 0 ? (
                exerciseList.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="border-b border-red-600 pb-5"
                        >
                            <div>
                                <h1 className="my-2 py-0 text-red-600">
                                    {item.name}
                                </h1>
                                <p className="my-2">{item.description}</p>
                                <p className="my-2">
                                    <span className="text-red-600">
                                        Muscle groups:{' '}
                                    </span>
                                    {item.muscle_groups.join(' ,')}
                                </p>
                                <p>
                                    <span className="text-red-600">Time: </span>
                                    {item.time}
                                </p>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="flex justify-center items-center w-full h-96">
                    <span>Comming soon</span>
                </div>
            )}
        </div>
    );
}

export default Practice;
