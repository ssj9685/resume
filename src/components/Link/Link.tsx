export default function Link(props: { href: string; text: string }) {
  const { href, text } = props;

  return (
    <a href={href} target="_blank">
      {text}
    </a>
  );
}
