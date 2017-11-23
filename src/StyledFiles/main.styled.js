import styled from 'styled-components';

export const Wrapper = styled.div`
  color: white;
  margin: 0 50px;
  display: grid;
  height: 100vh;
  grid-gap: 10px;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: 1fr 3fr 5fr;
  justify-items: center;
`;

export const TopLeft = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  flex-direction: column;
  align-self: self-end;
`;

export const FirstName = styled.span`font-size: 30px;`;

export const LastName = styled.span`font-size: 20px;`;

export const TopRight = styled.p`
  font-size: 1.2em;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  align-self: self-end;
  margin: 0px;
  ${'' /* justify-self: end; */}
`;

export const Hr = styled.hr`
  margin: 0px;
  width: 70%;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 1;
  align-self: self-end;
`;

export const MainText = styled.p`
  color: inherit;
  max-width: 850px;
  margin: 100px 0 0 0;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: auto;
  font-size: 2.4em;
  justify-self: center;
  align-self: self-end;
  span {
    background: rgba(219, 39, 0, 0.45);
  }
`;

export const MainMenu = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: auto;
  justify-self: center;
`;

export const Li = styled.li`opacity: 0.3;`;

export const A = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  width: 150px;
  height: 150px;
  flex-direction: column;
  background: ${props => props.color || 'grey'};
  :hover {
    position: relative;
    width: 180px;
    height: 180px;
    top: -15px;
    right: -15px;
  }
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

export const Span = styled.span``;

export const Strong = styled.strong`font-size: 3em;`;
