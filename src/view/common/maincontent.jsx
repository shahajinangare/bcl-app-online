import React from 'react';
import Login from '../../components/users/login';
 

const MainContent = () => (
       <div>
            { 
                  sessionStorage.getItem('userdet') ?null:
                   <Login />
            }
       </div>
);

export default MainContent;

