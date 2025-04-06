import React, { useEffect, useRef, useState, useCallback } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import loadingGif from './loading.gif';

// Custom hook for debounced scroll handler
const useDebounceScroll = (callback, delay = 200) => {
  const callbackRef = useRef(callback);
  
  // Update the callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  
  // Create memoized debounced function
  return useCallback(
    debounce((e) => {
      callbackRef.current(e);
    }, delay),
    [delay]
  );
};

export const useFetchPicsum = (page = 1, limit = 5) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = useCallback(async (pageNum) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://picsum.photos/v2/list?page=${pageNum}&limit=${limit}`);
      
      if (response.data.length === 0) {
        setHasMore(false);
      } else {
        setData(prevData => [...prevData, ...response.data]);
      }
      setLoading(false);
    } catch (err) {
      setError('Error fetching data');
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchData(page);
  }, [page, fetchData]);

  return { data, loading, error, hasMore, fetchData };
};

const Images = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error, hasMore } = useFetchPicsum(page);
  const images = data.map(item => ({ src: item.download_url, alt: item.author }));
  const containerRef = useRef(null);
  const loadingRef = useRef(false);

  // Create the scroll handler logic
  const handleScroll = useCallback((e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    
    // Calculate scroll percentage
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    
    // Check if we're near the bottom (within 20% of the bottom)
    if (scrollPercentage > 80 && !loading && hasMore && !loadingRef.current) {
      loadingRef.current = true;
      console.log("Loading next page of images");
      
      // Load next page
      setPage(prevPage => prevPage + 1);
      
      // Reset loading ref after a delay
      setTimeout(() => {
        loadingRef.current = false;
      }, 1000);
    }
  }, [loading, hasMore]);
  
  // Apply debounce to the scroll handler
  const debouncedScrollHandler = useDebounceScroll(handleScroll, 300);
  
  // Clean up the debounced function on unmount
  useEffect(() => {
    return () => {
      debouncedScrollHandler.cancel();
    };
  }, [debouncedScrollHandler]);

  return (
    <div className="image-gallery-container">
      <div
        ref={containerRef}
        onScroll={debouncedScrollHandler}
        className="image-list"
        style={{
          overflowY: 'auto',
          height: '100vh',
          display: 'grid',
          gap: '16px',
          padding: '16px'
        }}
      >
        {images.map((image, index) => (
          <div key={`img-${index}`} className="image-item" style={{ marginBottom: '16px' }}>
            <LazyImage
              src={image.src}
              alt={image.alt}
              placeholder={loadingGif}
            />
            <p style={{ margin: '8px 0 0 0', textAlign: 'center' }}>{image.alt}</p>
          </div>
        ))}
        
        {loading && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '20px' }}>
            <img src={loadingGif} alt="Loading more images" style={{ width: '50px', height: '50px' }} />
          </div>
        )}
        
        {!hasMore && !loading && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '20px' }}>
            No more images to load
          </div>
        )}
      </div>
    </div>
  );
};

// LazyImage component unchanged
export const LazyImage = ({ src, alt, placeholder, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img:any = entry.target;
          img.src = img.getAttribute('data-src');
          img.onload = () => setIsLoaded(true);
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '0px 0px 100px 0px',
    });

    if (imgRef.current) {
      imageObserver.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        imageObserver.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      data-src={src}
      alt={alt}
      src={isLoaded ? src : placeholder}
      loading="lazy"
      style={{ objectFit: "cover", width: "100%", height: "100%" }}
      {...props}
    />
  );
};

export default Images;