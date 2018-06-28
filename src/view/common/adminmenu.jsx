import React from 'react';

const MenuContent = ({menuaccess}) => (
    <div id='cssmenu'>
    <ul>
        <li><a href=''><span>Home</span></a></li>
        {menuaccess.state.data.map(itemmain => {
            if (itemmain.parentid === -1) {
                return <li className='has-sub' id={itemmain.id}>
                    <a href=''><span>{itemmain.menuname}</span></a>
                    <ul>
                        {menuaccess.state.data.map(subitem => {
                            if (subitem.parentid === itemmain.id && subitem.parentid !== -1) {
                                return <li><a href={subitem.URL}  ><span>{subitem.menuname}</span></a></li>
                            }
                        })}
                    </ul>
                </li>
            }
        }
        )}
        <li><a href='' onClick={menuaccess.logoutsubmit} ><span>Log Out</span></a></li>
    </ul>
</div>

);

export default MenuContent;