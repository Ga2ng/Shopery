import React from 'react';
import BlogCard from '@/Components/BlogCard';
import Sidebar from '@/Components/Shop/Sidebar';
import SidebarAds from '@/Components/Shop/SidebarAds';

const Blog = () => {
    // Sample blog posts data
    const articles = [
        {
            id: 1,
            title: "The Benefits of Organic Produce",
            description: "Discover why organic fruits and vegetables are better for your health and the environment.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "15 MAY",
            comments: 5
        },
        {
            id: 2,
            title: "5 Easy Vegan Recipes for Beginners",
            description: "Start your plant-based journey with these simple and delicious vegan recipes.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "10 MAY",
            comments: 3
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        {
            id: 3,
            title: "Sustainable Farming Practices",
            description: "Learn about the latest sustainable farming techniques that are shaping the future of agriculture.",
            image: "https://i.pinimg.com/564x/f3/5c/a2/f35ca2ff4524d17af35b156d9ce43ae5.jpg",
            date: "05 MAY",
            comments: 7
        },
        // Add more articles as needed
    ];

    return (
        <div className="flex bg-gray-100 min-h-screen">
            {/* Sidebar */}
            <div className="w-1/4 p-4">
                <Sidebar />
            </div>

            {/* Main content */}
            <div className="w-3/4 p-8">
                <h1 className="text-4xl font-bold mb-8 text-green-800">Our Blog</h1>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                    {articles.map((article) => (
                        <BlogCard key={article.id} article={article} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
