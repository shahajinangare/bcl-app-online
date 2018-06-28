import React from 'react';
import Login from '../../components/users/login';
//import MenuContent from '../../components/common/adminmenu'

const MainContent = () => (
       <div>
            { 
                  sessionStorage.getItem('userdet') ?null:
                   <Login />
            }
       </div>
);

export default MainContent;

