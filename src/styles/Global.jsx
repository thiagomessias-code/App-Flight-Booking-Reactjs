import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
body {
    background: var(--whiteColor);
    -webkit-font-smoothing: antialiased;
}
body, input{
font-family: 'Roboto Slab', serif;
font-size: 16px;
}
a {
    text-decoration: none;
    font-weight: 500;
}

li{
    list-style: none;
    cursor: pointer;
}

.section{
    padding: 4rem 0 2rem;
}

.container{
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}



.flex{
    display: flex;
    align-items: center;
}
.none{
display: none;
}

.grid{
    display: grid;
    align-items: center;
}
h1 h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    padding: 1rem;
    font-weight: 700;
    color: var(--blackColor);
}
 p{
    font-size: 13px;
    color: var(--greyText);
    line-height: 22px;
 }
.btn {
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
}

img, video{
    width: 100%;
    height: auto;

}

input{
     font-size: 100%;
     color: var(--greyText);
}
:root{
    --PrimaryColor: hsl(225, 50%, 48%);
    --SecondaryColor: hsl(180, 17%, 95%);
    --colorOne: hsl(15, 74%, 70%);
    --colorTwo: hsl(28, 100%, 82%);
    --HoverColor: hsl(225, 56%, 59%);
    --whiteColor: hsl(0, 0%, 100%);
    --blackColor: hsl(0, 0%, 12%);
    --textColor: hsl(240, 1%, 48%);
    --borderColor: hsl(0, 0%, 83%);
    --whiteColorDeam: hsl(0, 0%, 93%);
    --greyBg: hsl(0, 0%, 96%);
    --greyText: rgb(145, 145, 145);
    --inputColor: hsl(330, 12%, 97%);
    --boxShadow: box-shadow: rgb(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.05) 0px 4px 6px -2px;
    --transition: .4s ease-in-out;
    

}
`