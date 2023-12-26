import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getLevel from '~/services/api-calls/getLevel';
import exerciseByGoalID from '~/services/api-handle/exerciseByGoalID';
function Practice() {
    return (
        <main>
            <div className="main_body row">
                <div className="col-sm-6 left_body">
                    <div className="img_body">
                        <img src="../img/banner_album.jpg" alt="" />
                    </div>

                    <br />

                    <div className="title_album row">
                        <div className="col-sm-7 left_title_album">
                            <h2> Life kit : Selfcare</h2>
                            <p>
                                {' '}
                                by Helen Mobile <span> 7 episodes </span>
                            </p>
                        </div>
                        <div className="col-sm-5 right_title_album flex">
                            <button className="button_follow"> Follow </button>
                            <button className="button_share"> Share </button>
                        </div>
                    </div>

                    <br />

                    <div className="About_box">
                        <h3>About</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Alias sunt vel voluptates, a quidem
                            dignissimos assumenda velit obcaecati commodi
                            sapiente, distinctio odit hic asperiores. Iusto
                            omnis provident ea tempora neque?
                        </p>
                    </div>
                </div>

                <div className="col-sm-6 right_body">
                    <div className="title">
                        <h3>
                            <a href="">All the song </a>
                        </h3>
                        {/* <!-- <a href=""><i className='bx bx-chevron-right bx-md'></i></a> --> */}
                    </div>

                    <div className="content row">
                        <div className="col-sm-4 image p-0">
                            <img
                                src="../img/taivisao_mck.jpg"
                                alt="taivisao_mck"
                                width="80%"
                                height="120"
                            />
                        </div>
                        <a href="" className="col-sm-6 detail">
                            <h5> Tại vì sao ?</h5>
                            <h6> RPT MCK</h6>
                        </a>
                        <div className="col-sm-2 btn_group">
                            <button
                                className="btn_more border-none h-[35px] bg-[#272727] fill-white"
                            >
                                <svg
                                className=' float-right w-full'
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 128 512"
                                >
                                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                                </svg>
                            </button>

                            <button className="btn_play">
                                <svg
                                    className='fill-white'
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 384 512"
                                >
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <br />

                    <div className="content row">
                        <div className="col-sm-4 image p-0">
                            <img
                                src="../img/taivisao_mck.jpg"
                                alt="taivisao_mck"
                                width="80%"
                                height="120"
                            />
                        </div>
                        <a href="" className="col-sm-6 detail">
                            <h5> Tại vì sao ?</h5>
                            <h6> RPT MCK</h6>
                        </a>
                        <div className="col-sm-2 btn_group">
                            <button
                                className="btn_more border-none h-[35px] bg-[#272727] fill-white"
                            >
                                <svg
                                className=' float-right w-full'
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 128 512"
                                >
                                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                                </svg>
                            </button>

                            <button className="btn_play">
                                <svg
                                    className='fill-white'
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 384 512"
                                >
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <br />

                    <div className="content row">
                        <div className="col-sm-4 image p-0">
                            <img
                                src="../img/taivisao_mck.jpg"
                                alt="taivisao_mck"
                                width="80%"
                                height="120"
                            />
                        </div>
                        <a href="" className="col-sm-6 detail">
                            <h5> Tại vì sao ?</h5>
                            <h6> RPT MCK</h6>
                        </a>
                        <div className="col-sm-2 btn_group">
                            <button
                                className="btn_more border-none h-[35px] bg-[#272727] fill-white"
                            >
                                <svg
                                className=' float-right w-full'
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 128 512"
                                >
                                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                                </svg>
                            </button>

                            <button className="btn_play">
                                <svg
                                    className='fill-white'
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 384 512"
                                >
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <br />

                    <div className="content row">
                        <div className="col-sm-4 image p-0">
                            <img
                                src="../img/taivisao_mck.jpg"
                                alt="taivisao_mck"
                                width="80%"
                                height="120"
                            />
                        </div>
                        <a href="" className="col-sm-6 detail">
                            <h5> Tại vì sao ?</h5>
                            <h6> RPT MCK</h6>
                        </a>
                        <div className="col-sm-2 btn_group">
                            <button
                                className="btn_more border-none h-[35px] bg-[#272727] fill-white"
                            >
                                <svg
                                className=' float-right w-full'
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 128 512"
                                >
                                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                                </svg>
                            </button>

                            <button className="btn_play">
                                <svg
                                    className='fill-white'
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 384 512"
                                >
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <br />

                    <div className="content row">
                        <div className="col-sm-4 image p-0">
                            <img
                                src="../img/taivisao_mck.jpg"
                                alt="taivisao_mck"
                                width="80%"
                                height="120"
                            />
                        </div>
                        <a href="" className="col-sm-6 detail">
                            <h5> Tại vì sao ?</h5>
                            <h6> RPT MCK</h6>
                        </a>
                        <div className="col-sm-2 btn_group">
                            <button
                                className="btn_more border-none h-[35px] bg-[#272727] fill-white"
                            >
                                <svg
                                className=' float-right w-full'
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 128 512"
                                >
                                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                                </svg>
                            </button>

                            <button className="btn_play">
                                <svg
                                    className='fill-white'
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 384 512"
                                >
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <br />


                    {/* <div className="content row">
                        <div className="col-sm-4 image p-0">
                            <img
                                src="../img/taivisao_mck.jpg"
                                alt="taivisao_mck"
                                width="80%"
                                height="120"
                            />
                        </div>
                        <a href="" className="col-sm-6 detail">
                            <h5> Tại vì sao ?</h5>
                            <h6> RPT MCK</h6>
                        </a>
                        <div className="col-sm-2 btn_group">
                            <button
                                className="btn_more border-none h-[35px] bg-[#272727] fill-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 128 512"
                                    style="float: right; width: 100%"
                                >
                                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                                </svg>
                            </button>

                            <button className="btn_play">
                                <svg
                                    style="fill: white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 384 512"
                                >
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <br />

                    <div className="content row">
                        <div className="col-sm-4 image p-0">
                            <img
                                src="../img/taivisao_mck.jpg"
                                alt="taivisao_mck"
                                width="80%"
                                height="120"
                            />
                        </div>
                        <a href="" className="col-sm-6 detail">
                            <h5> Tại vì sao ?</h5>
                            <h6> RPT MCK</h6>
                        </a>
                        <div className="col-sm-2 btn_group">
                            <button
                                className="btn_more"
                                style="border: 0; height: 35px; background-color: #272727; fill: white;"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 128 512"
                                    style="float: right; width: 100%"
                                >
                                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                                </svg>
                            </button>

                            <button className="btn_play">
                                <svg
                                    style="fill: white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 384 512"
                                >
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <br />

                    <div className="content row">
                        <div className="col-sm-4 image p-0">
                            <img
                                src="../img/taivisao_mck.jpg"
                                alt="taivisao_mck"
                                width="80%"
                                height="120"
                            />
                        </div>
                        <a href="" className="col-sm-6 detail">
                            <h5> Tại vì sao ?</h5>
                            <h6> RPT MCK</h6>
                        </a>
                        <div className="col-sm-2 btn_group">
                            <button
                                className="btn_more"
                                style="border: 0; height: 35px; background-color: #272727; fill: white;"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 128 512"
                                    style="float: right; width: 100%"
                                >
                                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                                </svg>
                            </button>

                            <button className="btn_play">
                                <svg
                                    style="fill: white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 384 512"
                                >
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <br />

                    <div className="content row">
                        <div className="col-sm-4 image p-0">
                            <img
                                src="../img/taivisao_mck.jpg"
                                alt="taivisao_mck"
                                width="80%"
                                height="120"
                            />
                        </div>
                        <a href="" className="col-sm-6 detail">
                            <h5> Tại vì sao ?</h5>
                            <h6> RPT MCK</h6>
                        </a>
                        <div className="col-sm-2 btn_group">
                            <button
                                className="btn_more"
                                style="border: 0; height: 35px; background-color: #272727; fill: white;"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 128 512"
                                    style="float: right; width: 100%"
                                >
                                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                                </svg>
                            </button>

                            <button className="btn_play">
                                <svg
                                    style="fill: white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 384 512"
                                >
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                                </svg>
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </main>
    );
}

export default Practice;
