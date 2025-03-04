import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContent = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid #6534ff;
  border-top-color: #c3c3c6;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
