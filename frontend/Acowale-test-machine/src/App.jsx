import React, { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import acowaleImage from './assets/acowale.png'

const App = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:5001/news'); // Updated port number here
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false); // Update loading state
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error);
        setLoading(false); // Update loading state
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className='p-4 text-center relative top-[35vh]'>
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#0866ff"
          secondaryColor='#fff'
          ariaLabel="oval-loading"
          wrapperStyle={{ position: 'relative' }}
          wrapperClass="spinner"
        />
        <img
          src={acowaleImage}
          alt="Overlay Image"
          className='absolute inset-0 m-auto'
          style={{ width: '40px', height: '40px' }}
        />
       </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='p-4'>
      <h1 className='text-6xl mx-auto w-full text-center mb-14'>Latest News</h1>
      <div className='grid grid-cols-1 gap-y-15 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 lg:gap-x-5 md:gap-y-10'>
        {articles.map((article, index) => (
          <div key={index} className='mb-10'>
            <img src={article.image} alt={article.title} className='rounded' width='1200px' height='675px' />
            <h2 className='font-bold mt-2 text-[#0866ff]'>{article.title}</h2>
            <p className='italic text-sm mt-2'>{article.description}</p>
            <p className='text-sm mt-2'>Source: <a href={article.source.url} target="_blank" rel="noopener noreferrer">{article.source.name}</a></p>
            <div className='flex gap-10 items-center mt-2'>
              <p className='text-[0.7rem]'>Published at: {new Date(article.publishedAt).toLocaleString()}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className='text-[0.7rem] border-2 border-[#0866ff] rounded p-[5px] hover:bg-[#0866ff] hover:text-white text-[#0866ff]'>Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
