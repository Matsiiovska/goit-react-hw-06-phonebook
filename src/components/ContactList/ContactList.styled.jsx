import styled from "@emotion/styled";


export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  padding: 10px;
  border-radius: 2px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  padding: 5px;
  border-radius: 2px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  font: inherit;
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid gray;
`;

export const Name = styled.span`
  text-align: left;
  font-size: 22px;
  color: var(--primary);
  text-shadow: var(--main-shadow);
  text-transform: capitalize;

  flex-basis: 33.333%;
`;

export const Number = styled.span`
  text-align: right;

  font-weight: 500;
  font-size: 22px;
  color: var(--accent);
  text-shadow: var(--main-shadow);
  flex-basis: 33.333%;
`;