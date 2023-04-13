import { Container } from "./style";

export function SelectInput({ option1, option2, option3, category, ...rest }) {
  const title1 = option1[0].toUpperCase() + option1.substring(1);
  const title2 = option2[0].toUpperCase() + option2.substring(1);
  const title3 = option3[0].toUpperCase() + option3.substring(1);

  function handleOptions() {
    switch(category) {
      case 'refeição':
        return (
          <select {...rest} defaultValue={"option1"}>
            <option value={"default"} disabled>{title1}</option>
            <option value={option1}>{title1}</option>
            <option value={option2}>{title2}</option>
            <option value={option3}>{title3}</option>
          </select>
        )
      case 'sobremesa':
        return (
          <select {...rest} defaultValue={"option2"}>
            <option value={"default"} disabled>{title2}</option>
            <option value={option1}>{title1}</option>
            <option value={option2}>{title2}</option>
            <option value={option3}>{title3}</option>
          </select>
        )
      case 'bebida':
        return (
          <select {...rest} defaultValue={"option3"}>
            <option value={"default"} disabled>{title3}</option>
            <option value={option1}>{title1}</option>
            <option value={option2}>{title2}</option>
            <option value={option3}>{title3}</option>
          </select>
        )
      default:
        return (
          <select {...rest} defaultValue={"default"}>
            <option value={"default"} disabled>Selecione um tipo</option>
            <option value={option1}>{title1}</option>
            <option value={option2}>{title2}</option>
            <option value={option3}>{title3}</option>
          </select>
        )
    }
  }

  return (
    <Container>
      {handleOptions()}
    </Container>
  );
}