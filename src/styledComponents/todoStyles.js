import styled from "vue-styled-components";

export const AppWrapper = styled.div`
  background: #74ebd5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #acb6e5,
    #74ebd5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #acb6e5,
    #74ebd5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  justify-content: center;
  height: 100vh;
  padding-top: 25px;
  width: 100%;
  .todos-title {
    font-weight: 400;
  }
`;

export const AddTodoBtn = styled.button`
  background: transparent;
  border: none;
  box-shadow: -1px 0 0 0 var(--text-dark-25);
  color: var(--text-dark);
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: -63px;
  padding: 18px 15px;
  position: absolute;
  text-transform: uppercase;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Divider = styled.hr`
  margin: 10px;
`;

export const ErrorWrapper = styled.div`
  margin-top: 15px;
`;

export const HorizontalFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  &:first-of-type {
    flex-grow: 1;
    display: grid;
    grid-template-columns: 25px 1fr;
    grid-column-gap: 10px;
  }
`;

export const TodoInput = styled.input`
  background: var(--white);
  border: none;
  border-radius: 5px;
  font-family: var(--default-fonts);
  padding: 16px 60px 16px 15px;
  width: -webkit-fill-available;
  &:focus {
    box-shadow: 2px solid #3e3e3e;
  }
`;
