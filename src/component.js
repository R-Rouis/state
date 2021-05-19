
import SideNav, {  NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React  from 'react';
import { card ,  button} from "react-bootstrap";
import './component.css'
const component = ()=> {
return (
    <div className="nav">
<SideNav style ={{ backgroundColor : "rgb(68, 11, 63)"}}>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home" >
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home"  style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Projects
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                    Automation
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    Web development
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
</div>
)
}
export default component;