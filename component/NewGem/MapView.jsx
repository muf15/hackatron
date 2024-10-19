// src/component/NewGem/MapView.jsx
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { usePostContext } from "../../context/PostContext.jsx"; // Ensure this path is correct

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

// Create a smaller marker icon
const smallMarkerIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [20, 30],
    iconAnchor: [10, 30],
    popupAnchor: [0, -30],
});

const MapView = () => {
    const { setPublishedPosts } = usePostContext(); // Get the setPublishedPosts function from context

    // Define IIIT Gwalior coordinates
    const position = [26.2189, 78.1824];

    const [uploadedFile, setUploadedFile] = useState(null);
    const [comment, setComment] = useState("");
    const [markerPosition, setMarkerPosition] = useState(position);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFile(URL.createObjectURL(file));
        }
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleMapClick = (event) => {
        setMarkerPosition([event.latlng.lat, event.latlng.lng]);
        setUploadedFile(null);
        setComment("");
    };

    const handlePublish = () => {
        if (comment || uploadedFile) {
            setPublishedPosts((prevPosts) => [
                ...prevPosts,
                { comment, uploadedFile, position: markerPosition },
            ]);
            setComment("");
            setUploadedFile(null);
        } else {
            alert("Please add a comment or upload an image before publishing.");
        }
    };

    return (
        <div>
            <div style={{ marginBottom: "10px" }}>
                <input type="file" onChange={handleFileChange} />
                <input
                    type="text"
                    placeholder="Add a comment"
                    value={comment}
                    onChange={handleCommentChange}
                    style={{ marginLeft: "10px" }}
                />
                <button onClick={handlePublish} style={{ marginLeft: "10px" }}>
                    Publish
                </button>
            </div>

            <MapContainer
                center={position}
                zoom={15}
                maxZoom={19}
                style={{ height: "50vh", width: "100vw" }}
                onClick={handleMapClick} // Set marker position on map click
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={markerPosition} icon={smallMarkerIcon}>
                    <Popup>
                        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", color: "white", padding: "5px", borderRadius: "5px" }}>
                            {uploadedFile && <img src={uploadedFile} alt="Uploaded" style={{ width: "100px", height: "100px" }} />}
                            <br />
                            {comment ? comment : "No comment added."}
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapView;
