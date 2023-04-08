import React, { useState, useEffect } from 'react'

export default function Ueffect(){
    const [resourceType, setResourceType] = useState('post')

    return(
        <>
        <div>
            <button onClick={() => setResourceType('post')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>
            {resourceType}
        </h1>
        </>
    )
}