import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: ${({ block }) => (block ? "block" : "inline-block")};
`;

const Label = styled.label`
  display: block;
  font-size: 12px;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid ${({ invalid }) => (invalid ? "red" : "gray")};
  border-radius: 4px;
  box-sizing: border-box;
`;

const Select = ({
  data,
  label,
  placeholder,
  block = false,
  invalid = false,
  required = false,
  disabled = false, // ✅ 오타 수정
  wrapperProps,
  ...props
}) => {
  const formattedData = data.map((item) =>
    typeof item === "string" ? { label: item, value: item } : item
  );

  const options = formattedData.map((item) => (
    <option key={item.value} value={item.value}>
      {item.label}
    </option>
  ));

  if(placeholder){
    options.unshift(
      <option key="Placeholder" value="" hidden>{placeholder}</option>
    )
  };

  return (
    <Wrapper block={block} {...wrapperProps}>
      {label && <Label>{label}</Label>}
      <StyledSelect
        invalid={invalid}
        required={required}
        disabled={disabled}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options}
      </StyledSelect>
    </Wrapper>
  );
};

export default Select;
