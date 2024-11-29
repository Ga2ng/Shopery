import React from 'react';
import BlogCard from '../BlogCard';

const articles = [
  {
    id: 1,
    date: '18 NOV',
    title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
    image: 'https://i.pinimg.com/564x/34/ff/5b/34ff5bdecc862d7c62308cb4ab0db46a.jpg', // Replace with your image URL
    description: 'Nunc fermentum.',
    comments: 0
  },
  {
    id: 2,
    date: '23 JAN',
    title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
    image: 'https://i.pinimg.com/564x/34/ff/5b/34ff5bdecc862d7c62308cb4ab0db46a.jpg', // Replace with your image URL
    description: 'Nunc fermentum.',
    comments: 0
  },
  {
    id: 3,
    date: '18 NOV',
    title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
    image: 'https://i.pinimg.com/564x/34/ff/5b/34ff5bdecc862d7c62308cb4ab0db46a.jpg', // Replace with your image URL
    description: 'Nunc fermentum.',
    comments: 0
  },
];

function News() {
  return (
    <div className="bg-gray-100  p-5">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Latest News</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default News;
