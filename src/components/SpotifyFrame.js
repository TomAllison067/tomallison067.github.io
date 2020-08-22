import React from 'react';
import './styles/spotify.css';
function SpotifyFrame() {
    return (
        <iframe className="frame" src="https://open.spotify.com/embed/album/0HrDrQPhOBR04RKmY7DCJj"
            frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    );
}

export default SpotifyFrame