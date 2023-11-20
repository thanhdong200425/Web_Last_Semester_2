import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, initTE } from 'tw-elements';

import getGoalList from '~/services/api-calls/getGoalList';

function Home() {
    const [goalList, setGoalList] = useState([]);

    const scrollElement = useRef();
    const scrollLeft = () => {
        scrollElement.current.scrollLeft += 610;
    };
    const scrollRight = () => {
        scrollElement.current.scrollLeft -= 610;
    };

    useEffect(() => {
        initTE({ Carousel });
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
            <div className="container px-2 md:px-0 grid grid-cols-1 gap-5">
                <div className="col-span-1">
                    {/* <h2 className="text-xl m-0 text-red-600">Phổ biến:</h2> */}
                    <div
                        id="carouselExerciseCaptions"
                        className="relative w-full rounded-lg overflow-hidden"
                        data-te-carousel-init=""
                        data-te-carousel-slide=""
                    >
                        {/*Carousel indicators*/}
                        <div
                            className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                            data-te-carousel-indicators=""
                        >
                            <button
                                type="button"
                                data-te-target="#carouselExerciseCaptions"
                                data-te-slide-to={0}
                                data-te-carousel-active=""
                                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                                aria-current="true"
                                aria-label="Slide 1"
                            />
                            <button
                                type="button"
                                data-te-target="#carouselExerciseCaptions"
                                data-te-slide-to={1}
                                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                                aria-label="Slide 2"
                            />
                            <button
                                type="button"
                                data-te-target="#carouselExerciseCaptions"
                                data-te-slide-to={2}
                                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                                aria-label="Slide 3"
                            />
                        </div>
                        {/*Carousel items*/}
                        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                            {/*First item*/}
                            <div
                                className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                data-te-carousel-active=""
                                data-te-carousel-item=""
                                style={{ backfaceVisibility: 'hidden' }}
                            >
                                {goalList && goalList.length > 0 ? (
                                    <Link to={'/target/'+goalList[0].id}>
                                        <img
                                            src={goalList[0].image}
                                            className="block w-full aspect-[120/53] object-cover"
                                            alt="..."
                                        />
                                        <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white ">
                                            <h5 className="text-xl font-bold text-red-600 bg-white">
                                                {goalList[0].goal}
                                            </h5>
                                            <p className='hidden md:block'>{goalList[0].description}</p>
                                        </div>
                                    </Link>
                                ) : (
                                    <>
                                        <img
                                            src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg"
                                            className="block w-full aspect-[120/53] object-cover"
                                            alt="..."
                                        />
                                        <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white">
                                            <h5 className="text-xl font-bold text-red-600 bg-white">
                                                No data
                                            </h5>
                                            <p className='hidden md:block'>No data</p>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/*Second item*/}
                            <div
                                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                data-te-carousel-item=""
                                style={{ backfaceVisibility: 'hidden' }}
                            >
                                {goalList && goalList.length > 0 ? (
                                    <Link to={'/target/'+goalList[1].id}>
                                        <img
                                            src={goalList[1].image}
                                            className="block w-full aspect-[120/53] object-cover"
                                            alt="..."
                                        />
                                        <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white">
                                            <h5 className="text-xl font-bold text-red-600 bg-white">
                                                {goalList[1].goal}
                                            </h5>
                                            <p className='hidden md:block'>{goalList[1].description}</p>
                                        </div>
                                    </Link>
                                ) : (
                                    <>
                                        <img
                                            src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg"
                                            className="block w-full aspect-[120/53] object-cover"
                                            alt="..."
                                        />
                                        <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white">
                                            <h5 className="text-xl font-bold text-red-600 bg-white">
                                                No data
                                            </h5>
                                            <p className='hidden md:block'>No data</p>
                                        </div>
                                    </>
                                )}
                            </div>
                            {/*Third item*/}
                            <div
                                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                data-te-carousel-item=""
                                style={{ backfaceVisibility: 'hidden' }}
                            >
                                {goalList && goalList.length > 0 ? (
                                    <Link to={'/target/'+goalList[2].id}>
                                        <img
                                            src={goalList[2].image}
                                            className="block w-full aspect-[120/53] object-cover"
                                            alt="..."
                                        />
                                        <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white">
                                            <h5 className="text-xl font-bold text-red-600 bg-white">
                                                {goalList[2].goal}
                                            </h5>
                                            <p className='hidden md:block'>{goalList[2].description}</p>
                                        </div>
                                    </Link>
                                ) : (
                                    <>
                                        <img
                                            src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg"
                                            className="block w-full aspect-[120/53] object-cover"
                                            alt="..."
                                        />
                                        <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white">
                                            <h5 className="text-xl font-bold text-red-600 bg-white">
                                                No data
                                            </h5>
                                            <p className='hidden md:block'>No data</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        {/*Carousel controls - prev item*/}
                        <button
                            className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                            type="button"
                            data-te-target="#carouselExerciseCaptions"
                            data-te-slide="prev"
                        >
                            <span className="inline-block h-8 w-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 19.5L8.25 12l7.5-7.5"
                                    />
                                </svg>
                            </span>
                            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                Previous
                            </span>
                        </button>
                        {/*Carousel controls - next item*/}
                        <button
                            className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                            type="button"
                            data-te-target="#carouselExerciseCaptions"
                            data-te-slide="next"
                        >
                            <span className="inline-block h-8 w-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </span>
                            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                Next
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <div className="mb-5 flex items-center gap-1">
                        <h2 className="text-xl m-0 text-red-600">
                            Training purpose:
                        </h2>
                        <Link to="/training" className='flex items-center hover:text-red-200'>
                            See all
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </Link>
                    </div>
                    <div>
                        {goalList && goalList.length > 0 ? (
                            <>
                                <div
                                    ref={scrollElement}
                                    className="flex items-center overflow-auto gap-5"
                                >
                                    {goalList.map((item) => {
                                        return (
                                            <Link to={'/target/'+item.id}
                                                key={item.id}
                                                class="min-w-full h-[628px] md:min-w-[590px] md:h-56 flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700 md:max-w-xl md:flex-row"
                                            >
                                                <img
                                                    class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                                    src={item.image}
                                                    alt=""
                                                />
                                                <div class="flex flex-col justify-start p-6">
                                                    <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                                        {item.goal}
                                                    </h5>
                                                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                                <div className="mt-5 flex justify-center items-center gap-5">
                                    <button
                                        onClick={scrollRight}
                                        className="hidden md:inline-flex items-center justify-center px-4 py-2 bg-red-600 rounded-lg"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 19.5L8.25 12l7.5-7.5"
                                            />
                                        </svg>
                                    </button>

                                    <button
                                        onClick={scrollLeft}
                                        className="hidden md:inline-flex items-center justify-center px-4 py-2 bg-red-600 rounded-lg"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div
                                    ref={scrollElement}
                                    className="flex items-center overflow-auto gap-5"
                                >
                                    <div class="min-w-full h-[628px] md:min-w-[590px] md:h-56 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                                        <img
                                            class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                            src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                                            alt=""
                                        />
                                        <div class="flex flex-col justify-start p-6">
                                            <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                                No data
                                            </h5>
                                            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                                No data
                                            </p>
                                        </div>
                                    </div>
                                    <div class="min-w-full h-[628px] md:min-w-[590px] md:h-56 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                                        <img
                                            class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                            src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                                            alt=""
                                        />
                                        <div class="flex flex-col justify-start p-6">
                                            <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                                No data
                                            </h5>
                                            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                                No data
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 flex justify-center items-center gap-5">
                                    <button
                                        onClick={scrollRight}
                                        className="hidden md:inline-flex items-center justify-center px-4 py-2 bg-red-600 rounded-lg"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 19.5L8.25 12l7.5-7.5"
                                            />
                                        </svg>
                                    </button>

                                    <button
                                        onClick={scrollLeft}
                                        className="hidden md:inline-flex items-center justify-center px-4 py-2 bg-red-600 rounded-lg"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
