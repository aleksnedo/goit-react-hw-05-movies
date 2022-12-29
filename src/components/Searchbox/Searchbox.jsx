export const Searchbox = ({ onChange, value, onClick }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter name of movie"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <button type="button" onClick={onClick}>
        Search
      </button>
    </div>
  );
};
