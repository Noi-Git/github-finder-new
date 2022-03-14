import React from 'react';

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  // another way to destructured props..ie.above
  // const { avatar_url, login, html_url } = props.user;

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt='image'
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          Github
        </a>
      </div>
    </div>
  );
};

export default UserItem;
