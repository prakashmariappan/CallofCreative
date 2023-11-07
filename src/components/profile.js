import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Profile = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const name = location.state?.name || "Name Not Found";
    const bio = location.state?.bio || "Bio Not Found";

    return (
        <>
            <button className='back_btn' onClick={() => navigate(-1)}>Back</button>
            <div className='page_heading'>Profile</div>
            <div className='profilepage_img'></div>
            <div className='profilepage_name'>{name}</div>
            <div className='profilepage_bio'>{bio}</div>
        </>
    );
}

export default Profile;