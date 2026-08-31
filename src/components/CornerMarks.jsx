export default function CornerMarks({ variant = 'onload' }) {
  const v = `corner-mark--${variant}`;
  return (
    <>
      <span className={`corner-mark ${v} corner-mark--tl`} />
      <span className={`corner-mark ${v} corner-mark--tr`} />
      <span className={`corner-mark ${v} corner-mark--bl`} />
      <span className={`corner-mark ${v} corner-mark--br`} />
    </>
  );
}
