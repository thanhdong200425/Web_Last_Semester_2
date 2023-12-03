import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import getGoalList from '~/services/api-calls/getGoalList';
import Loading from '~/components/Layout/components/Loading';

function Training() {
    const [goalList, setGoalList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataList = await getGoalList();
                setGoalList(dataList);
            } catch (error) {
                // Xử lý lỗi
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            {goalList && goalList.length > 0 ? (
                <>
                    <div className="container flex items-center gap-5 flex-wrap">
                        {goalList.map((item) => {
                            return (
                                <Link
                                    to={'/target/' + item.id}
                                    key={item.id}
                                    className="min-w-full h-[628px] xl:min-w-[590px] md:h-56 flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700 md:max-w-xl md:flex-row"
                                >
                                    <img
                                        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                        src={item.image}
                                        alt=""
                                    />
                                    <div className="flex flex-col justify-start p-6">
                                        <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                            {item.goal}
                                        </h5>
                                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                            {item.description}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </>
            ) : (
                <Loading />
            )}
        </div>
    );
}

export default Training;
