import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const SingleMovie = () => {

    const param = useParams();


    const [m_name, setMName] = useState();
    const [m_type, setMType] = useState();
    const [m_link, setMLink] = useState();
    const [m_releaseDate, setMReleaseDate] = useState();
    console.log(param)
    const getSingleMovie = async () => {
        const movieProfile = await fetch(`https://show-flix.onrender.com/single_movie/${param.mid}`)
        const movieData = await movieProfile.json();

        if (movieData) {
            // console.log(movieData)

            setMName(movieData.m_name)
            setMType(movieData.m_type)
            setMLink(movieData.m_link)
            setMReleaseDate(movieData.m_releaseDate)
        } else {
            console.log("nahi mili")
        }
    }

    function movieName(e) {
        setMName(e.target.value);
    }
    function movieType(e) {
        setMType(e.target.value);
    }
    function movieReleaseDate(e) {
        setMReleaseDate(e.target.value);
    }
    function movieLink(e) {
        setMLink(e.target.value);
    }

    const updateMovie = async () => {

        try {
            console.log("I a m in")
            const response = await fetch(`https://show-flix.onrender.com/update_movie/${param.mid}`, {
                method: 'post',
                headers: {

                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    m_name, m_link, m_type, m_releaseDate
                })
            })
            const updated = await response.json();
            if (updated) {
                console.log(updated)

            } else {
                console.log("not updated");
            }
        } catch (error) {
            console.log(error)
        }
    }


  
    useEffect(() => {
        getSingleMovie()
    }, [])

    return (
        <div>

            <input type='text' value={m_name?m_name:"no Name"} onChange={(e) => { movieName(e) }} />


            <input type='text' value={m_type?m_type:"No type"} onChange={(e) => { movieType(e) }} />

            <input type='text' value={m_link?m_link:"No link"} onChange={(e) => { movieLink(e) }} />

            <input type='text' value={m_releaseDate?m_releaseDate:"No Release Date"} onChange={(e) => { movieReleaseDate(e) }} />

            <input type='button' value='Update' onClick={(e) => { updateMovie() }} />
        </div>
    )
}

export default SingleMovie