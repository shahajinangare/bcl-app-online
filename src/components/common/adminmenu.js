import React from 'react';
import '../../assets/stylesheets/menu.css';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import MainContent from '../../components/common/maincontent';
import MenuContent from '../../view/common/adminmenu';
class adminmenu extends React.Component {
    data = [];

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
        this.logoutsubmit = this.logoutsubmit.bind(this);
        //this.getmenubyrole = this.getmenubyrole.bind(this);
    }

    logoutsubmit(event) {
         sessionStorage.clear();
         ReactDOM.render((<MainContent />), document.getElementById("main-content"));
    }

    componentDidMount() {
        //   alert('componentDidMount');
        fetch('http://localhost:7000/admin/getmenubyrole', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                roleid: 1,
                parentcode: 1,
                loginuserid: 1
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                //  console.log(responseJson.result);
                this.setState({
                    data: responseJson.result
                });
                // console.log(this.state.data);
                // responseJson.result.forEach(element => {
                //    // console.log(element);
                // });
                // return responseJson.result;
            })
            .catch((error) => {
                console.error(error);
            });
    }




    render() {

        //  alert(sessionStorage.getItem('userdet'));
        if (sessionStorage.getItem('userdet') != null) {

            return (
                <MenuContent menuaccess={this} />

            )
        }
        else { return null; }


        sessionStorage.setItem('menuloaded', 'Y');
    }
}

export default adminmenu;