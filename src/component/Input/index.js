import styled from "@emotion/styled"; 

// Wrapper 컴포넌트
const Wrapper = styled.div`
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
`;
const Label = styled.label`
    display: block;
    font-size: 12px;
`

// StyledInput 컴포넌트
const StyledInput = styled.input`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid ${({ invalid }) => (invalid ? 'red' : 'gray')};
  border-radius: 4px;
  box-sizing: border-box;
`;

// Input 컴포넌트
const Input = ({
  label,
  block = false,
  invalid = false,
  required = false,
  disabled = false,
  readOnly = false,
  className,
  wrapperProps,
  ...props
}) => {
  return (
    <Wrapper block={block} {...wrapperProps}>
        <Label>{label}</Label>
      <StyledInput
        invalid={invalid}
        required={required}
        disabled={disabled}
        className={className}
        readOnly={readOnly}
        {...props}
      />
    </Wrapper>
  );
};

export default Input;


// Error 메시지 뜨게 만들기 