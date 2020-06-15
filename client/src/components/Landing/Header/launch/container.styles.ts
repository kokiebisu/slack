export const LaunchOptionWrapper = styled(b.Box)`
  display: none;

  @media ${landing.lg} {
    display: block;
    position: absolute;
    top: 80px;
    right: calc(5%);
    border-radius: 3px;
  }
`;

export const LaunchOption = styled(b.Box)`
  padding: 10px;
  min-width: 380px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
`;

export const LaunchOptionLink = styled(b.Anchor)`
  &:hover {
    text-decoration: underline;
  }
`;
