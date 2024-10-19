// src/context/PostContext.js
import React, { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [publishedPosts, setPublishedPosts] = useState([]);

    return (
        <PostContext.Provider value={{ publishedPosts, setPublishedPosts }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePostContext = () => {
    return useContext(PostContext);
};
