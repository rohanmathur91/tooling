type GreetProps = {
  name: string;
};

export function Greet({ name }: GreetProps): string {
  return `Hi ${name} welcome to webpack.`;
}
