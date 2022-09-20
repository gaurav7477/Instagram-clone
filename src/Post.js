import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function Post() {
    return (
        <div className='post'>


            <div className="post_header">
                <Avatar className="post_avatar" alt='Gaurav' src='#' ></Avatar>

                <h3>username</h3>
            </div>
            
            {/*header -> avatar + username*/}

            <img className='post_image' src="https://images.unsplash.com/photo-1657979411054-6c619224e281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80" alt="" />
            {/*image*/}

            <p className='post_text'><strong>Gaurav </strong> wow amazing </p>
            {/* username + caption */}
        </div>
    )
}

export default Post
