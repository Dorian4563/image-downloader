interface Props {
  onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("query") as HTMLInputElement;

    onSearch(input.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="query" placeholder="Search images..." />
      <button>Search</button>
    </form>
  );
}