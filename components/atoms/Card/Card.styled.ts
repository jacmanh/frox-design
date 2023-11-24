import styled from 'styled-components'

export const Container = styled.div<{ $centered?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.size.borderRadius.default};

  ${({ $centered }) =>
    $centered &&
    `
    justify-content: center;
    align-items: center;
  `}
`

export const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-self: start;
  align-self: start;
  border-top: 1px solid ${({ theme }) => theme.color.border};
  padding-top: ${({ theme }) => theme.space.md};
  margin-top: ${({ theme }) => theme.space.md};
`
