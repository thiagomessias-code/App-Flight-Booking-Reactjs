import styled from 'styled-components'

export const Container = styled.div`
position: fixed;
flex-direction: column;
width: 100%;
z-index: 1000;

 .navBarOne, .navBarTwo{ 
    justify-content: space-between;
    padding: 1rem;
    width: 100%;}

    .navBarOne{
    background: var(--SecondaryColor);
    .icon:hover {
color: var(--PrimaryColor);
    }
    .atb{
        gap: 1rem;
        span{
            color: var(--blackColor);
            font-size: 13px;
            cursor: pointer;
            &:hover{
                color: var(--PrimaryColor);
                font-size: 700;
            }
        }}}

 .navBarTwo{
    justify-content: space-between;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 3.5rem 1rem; 
    position: fixed;
    transition: 3s ease-in-out;
.logoDiv{
    .Logo{
        width: 50%;
    }
}

@media screen and (max-width:768px) {
    .navBarMenu{
    position: absolute;
    background: var(--SecondaryColor);
    padding: 1.5rem;
    border-radius: 10px;
    top: 5rem;
    right: -50%;
    width: 80%;
    transform: translateX(50%);
    z-index: 2000;
    box-shadow: rgb(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.05) 0px 4px 6px -2px;
    border: 3px solid var(--whiteColor);
    transform: .4s ease-in-out ;

    .menu{
        flex-direction: column;
        gap: .5rem;
        text-align: center;

        .listItem{
            padding: .5rem 0;
            cursor: pointer;
            color: var(--blackColor);
            &:hover{
                color: var(--PrimaryColor);
                font-weight: 700;
            }
    }
   
        }
        
    }
    .toggle{
        .icon{
            font-size: 30px;
            color: var(blackcolor);
            cursor: pointer;
        }
     }
     .showNavBar{
        right: 50%;
        transition: .5s ease-in-out;
     }
     
}

}
.navBar_With_Bg{
        background: var(--SecondaryColor);
        padding: .5rem 1rem;
        box-shadow: rgb(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.05) 0px 4px 6px -2px;
     }
`

export const Button = styled.button`
display: block;
justify-content: center;
margin: auto;
margin-top: 1rem;
    padding: .7rem 1.5rem;
    background: var(--PrimaryColor);
    border: none;
    outline: none;
    border-radius: 3rem;
    color: var(--whiteColor);
    cursor: pointer;
    &:hover{
        background: var(--HoverColor);
    }
    .btnTwo{
        display: none;
    }

`
