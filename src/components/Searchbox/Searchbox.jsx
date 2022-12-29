import { InputWrapper, Input, Button } from './Searchbox.styled';

export const Searchbox = ({ onChange, value, onClick }) => {
  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder="Enter name of movie"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <Button type="button" onClick={onClick}>
        Search
      </Button>
    </InputWrapper>
  );
};
