interface ButtonProps {
  buttonText: string;
  onClickFunction: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <>
      <button onClick={props.onClickFunction}>{props.buttonText}</button>
    </>
  )
}

export default Button;
