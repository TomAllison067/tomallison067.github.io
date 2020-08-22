import React from 'react';
import './styles/spotify.css';
function SpotifyFrame() {
    return (
        <iframe title="SpotifyFrame" className="frame" src="https://open.spotify.com/embed/album/0HrDrQPhOBR04RKmY7DCJj"
            frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    );
}

export default SpotifyFrame