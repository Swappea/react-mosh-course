import React from 'react';

const Like = ({ liked, onClick }) => {
    return (
        <>
            <i style={{ cursor: 'pointer' }} className={liked ? 'fa fa-heart' : 'fa fa-heart-o'} aria-hidden="true" onClick={onClick}></i>
        </>
    )
}

export default Like;
