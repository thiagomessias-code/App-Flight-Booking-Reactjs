import styled from 'styled-components'

export const Container = styled.div`
.sectionContainer{
    width: 100%;
    padding: 1.5rem;
    border: 2px solid var(--greyBg);
    border-radius: 16px;
    row-gap: 2rem;
    .btns{
        background: var(--SecondaryColor);
        padding: .5rem;
        border-radius: 1rem;
        flex-direction: column;
        margin: auto;
        width: 100%;

        .singleBtn{
            padding: .8rem 1.5rem;
            border-radius: 3rem ;
            font-size: 13px;
            width: 80%;
            text-align: center;
            &:hover{
                background: var(--PrimaryColor);
                font-weight: 500;
                color: var(--whiteColor);
                
            }
        }
    }
    .searchInput{
        width: 100%;
        justify-content: center;
        flex-direction: column;
    }
}
`;