import SearchBar from './SearchBar'
import React, { useState, useEffect } from 'react'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search] = useVideos('dog');

    useEffect(() => {
        setSelectedVideo(videos[0])
    })

    return (
        <div className="ui container" style={{ marginTop: '15px' }}>
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className=" five wide column">
                        <VideoList
                            onVideoSelect={setSelectedVideo}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default App;
