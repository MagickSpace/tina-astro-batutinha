 
import { useTina } from "tinacms/dist/react";
export const MyComponent = (props) => {
  const { data } = useTina(props); 
  const myField = props.myField;

  const resultado = data?.post?.[myField]
  return (
    resultado
  );
};
