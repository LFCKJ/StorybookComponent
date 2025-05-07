import styled from "@emotion/styled";
import useToggle from "../../hooks/useToggle";

const ToggleContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  user-select: none;
`;

const ToggleSwitch = styled.div`
  width: 64px;
  height: 30px;
  padding: 2px;
  box-sizing: border-box;
  background-color: #ccc;
  border-radius: 15px;
  position: relative;
  transition: background-color 0.2s ease-out;

  &::after {
    content: '';
    position: absolute;
    left: 2px;
    top: 2px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: white;
    transition: left 0.2s ease-out;
  }
`;

const ToggleInput = styled.input`
  display: none;

  &:checked + .switch {
    background-color: lightgreen;
  }

  &:checked + .switch::after {
    left: calc(100% - 28px); /* 64 - 2*2 padding - 26 width */
  }

  &:disabled + .switch {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:disabled + .switch::after {
    opacity: 0.7;
  }
`;

const Toggle = ({
  name,
  on = false,
  disabled,
  onChange,
  ...props
}) => {
  const [checked, toggle] = useToggle(on);

  const handleChange = (e) => {
    toggle();
    onChange && onChange(e);
  };

  return (
    <ToggleContainer {...props}>
      <ToggleInput
        type="checkbox"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <ToggleSwitch className="switch" />
    </ToggleContainer>
  );
};

export default Toggle;
