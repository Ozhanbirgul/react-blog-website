import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import Sidebar from './Sidebar';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]); // Tüm blog verilerini tutar (API'den çekilen bloglar burada saklanır)

    const [currentPage, setCurrentPage] = useState(1); // Şu an görüntülenen sayfa numarasını tutar (pagination için)

    const pageSize = 12; // Her sayfada kaç blog gösterileceğini belirler (örneğin: 1 sayfada 12 blog)

    const [selectedCategory, setSelectedCategory] = useState(); // Seçilen kategori bilgisini tutar (kategoriye göre filtreleme yapılır)

    const [activeCategory, setActiveCategory] = useState(null);


    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5001/blogs?page=${currentPage}&limit=${pageSize}`;

            // filter by category
            if (selectedCategory) {
                url += `&category=${selectedCategory}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }
        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory])


    // page chaging btn
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }
    return (
        <div>
            {/* category section */}
            <div>
                <CategorySelection
                    onSelectCategory={handleCategoryChange}
                    selectedCategory={selectedCategory}
                    activeCategory={activeCategory}
                />
            </div>

            {/* blogCards section */}
            <div className='flex flex-col lg:flex-row gap-12'>
                {/* blog cards component */}
                <BlogCards
                    blogs={blogs}
                    currentPage={currentPage}
                    selectedCategory={selectedCategory}
                    pageSize={pageSize}
                />

                 {/* Sidebar component */}   
                <div>
                    <Sidebar />
                </div>
            </div>

            {/* pagination section */}
            <div>
                <Pagination
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                    blogs={blogs}
                    pageSize={pageSize} />
            </div>
        </div>
    )
}

export default BlogPage
