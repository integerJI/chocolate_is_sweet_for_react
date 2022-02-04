import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function AxiosApi() {
    
    // 비구조화 할당
    let [posts, setPost] = useState([]);

    // 통신 메서드
    function searchApi() {
        const url = "http://127.0.0.1:8000/darkChoco/jsPost/";
        axios.get(url)
        .then(function(response) {
            setPost(response.data);
            console.log(response.data);
            console.log("성공");
        })
        .catch(function(error) {
            console.log("실패");
        })
        
    }

    if(posts.length > 0) {
        return (
            <p>message : {posts}</p>
        );
    } else {
        return (
            <div>
                <button onClick={searchApi}> 불러오기 </button>
            </div>
        )
    }

}

export default AxiosApi;