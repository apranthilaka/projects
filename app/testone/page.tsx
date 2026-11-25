type Props = {
  name: string;
  age: number;
};

export default function Page({ name, age }: Props) {
  return (
    <div>
      <div>
        {name} and {age}
      </div>
    </div>
  );
}
