import { Container } from "./style";

export function TextButton({ icon: Icon, title, ...rest }) {

  return(
    <Container
      type="button"
      {...rest}
    >
      {Icon && <Icon />}
      {title}
    </Container>
  );
}