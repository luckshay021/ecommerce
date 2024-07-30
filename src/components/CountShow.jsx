//Data transfer from parent to child (Home to Countshow)
export default function CountShow({ value, setCount }) {
  return (
    <div>
      <h1>{value}</h1>

      <button type="button" onClick={() => setCount(value + 1)}>
        <h4>INCREASE</h4>
      </button>
      <button type="button" onClick={() => setCount(value - 1)}>
        <h4>DECREASE</h4>
      </button>
    </div>
  );
}
