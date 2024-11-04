export default function BgGrid() {
  return (
    <div className="absolute inset-0 opacity-10">
      <div
        className="h-full w-full bg-grid-light dark:bg-grid-dark"
        style={{
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
