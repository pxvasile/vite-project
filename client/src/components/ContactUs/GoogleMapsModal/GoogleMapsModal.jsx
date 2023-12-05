import { useState } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const markers = [
    {
        id: 1,
        cityName: "Vratza",
        position: { lat: 43.207437, lng: 23.551766 }
    }
]

export default function GoogleMapModal() {
    const KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: KEY,
    });

    const [activeMarker, setActiveMarkers] = useState(null);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarkers(marker);
    }

    return (
        <>
            <div className='contact-container'>
            
                <div style={{ width: '400px', height: '400px' }}>
                    {isLoaded ? <GoogleMap
                        mapContainerStyle={{ width: '400px', height: '400px' }}
                        onclick={() => setActiveMarkers(null)}
                        center={{ lat: 43.207437, lng: 23.551766 }}
                        zoom={10}
                    >
                        {
                            markers.map((id, cityName, position) => (
                                <MarkerF
                                    key={id}
                                    position={position}
                                    onClick={() => handleActiveMarker(id)}
                                >
                                    {
                                        activeMarker === id ? (
                                            <InfoWindowF onClose={() => setActiveMarkers(null)}>
                                                <div>{cityName}</div>
                                            </InfoWindowF>
                                        ) : null
                                    }
                                </MarkerF>
                            ))
                        }
                        <></>
                    </GoogleMap> : null
                    }
                </div>
            </div>
        </>
    )
}   