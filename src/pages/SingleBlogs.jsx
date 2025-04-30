import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa6';
import Sidebar from '../components/Sidebar';

function SingleBlogs() {
    const data = useLoaderData();
    const { title, image, category, author, published_date, reading_time, content } = data[0];
    return (
        <div>
            <div className='py-40 bg-black text-center text-white px-4'>
                <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h2>
            </div>

            {/*blog details */}
            <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
                <div className='lg:3/4 mx-auto'>
                    <div>
                        <img src={image} className='w-full mx-auto rounded ' alt=""/>
                    </div>
                    <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
                    <p className='mb-3 text-gray-600'>
                        <FaUser className='inline-flex items-center mr-2' /> 
                        {author} | {published_date}
                    </p>

                    <p className='mb-3 text-gray-600'>
                        <FaClock className='inline-flex items-center mr-2' /> 
                        {reading_time}
                    </p>
                    <p className='text-base text-gray-500 mb-6'>{content}</p>
                    <div className='text-base text-gray-500'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ratione 
                            libero quam vero doloremque incidunt, ut maiores accusamus amet alias voluptas 
                            eum cupiditate totam, nobis minima accusantium assumenda! Qui, harum.
                            </p> <br />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere deserunt ut 
                            molestiae id optio cupiditate labore voluptate, aut fugiat non numquam, 
                            temporibus amet distinctio! Ea libero autem iusto harum sit.
                            </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima ex porro, 
                            incidunt consectetur molestias rem quidem vitae. Vero asperiores doloremque 
                            eveniet officia. Voluptatem, velit quis. Iusto quaerat autem iste!
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ratione 
                            libero quam vero doloremque incidunt, ut maiores accusamus amet alias voluptas 
                            eum cupiditate totam, nobis minima accusantium assumenda! Qui, harum.
                            </p> <br />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere deserunt ut 
                            molestiae id optio cupiditate labore voluptate, aut fugiat non numquam, 
                            temporibus amet distinctio! Ea libero autem iusto harum sit.
                            </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima ex porro, 
                            incidunt consectetur molestias rem quidem vitae. Vero asperiores doloremque 
                            eveniet officia. Voluptatem, velit quis. Iusto quaerat autem iste!
                        </p> <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ratione 
                            libero quam vero doloremque incidunt, ut maiores accusamus amet alias voluptas 
                            eum cupiditate totam, nobis minima accusantium assumenda! Qui, harum.
                            </p> <br />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere deserunt ut 
                            molestiae id optio cupiditate labore voluptate, aut fugiat non numquam, 
                            temporibus amet distinctio! Ea libero autem iusto harum sit.
                            </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima ex porro, 
                            incidunt consectetur molestias rem quidem vitae. Vero asperiores doloremque 
                            eveniet officia. Voluptatem, velit quis. Iusto quaerat autem iste!
                        </p> <br />
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default SingleBlogs
