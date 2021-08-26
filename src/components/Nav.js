import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
    position: fixed;
    background-color: #80808050;
    .link{
        list-style-type: none;
        display: inline;
        margin: 0 15%;
        
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    .links{
        display: flex;
        justify-content: space-evenly;
        margin-right: 5%;
    }
    
`<
const Nav = () => {
    
    return (
        <Wrapper>
            <div className="links">
                <ul>
                    <li className="link"><a href="/dashboard">Dashboard</a></li>
                    <li className="link"><a href="/">Logout</a></li>
                    
                </ul>
            </div>
        </Wrapper>
    )
}
export default Nav