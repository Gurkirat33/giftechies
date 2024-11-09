export default function BgGrid() {
  return (
    <div className="absolute inset-0 opacity-10">
      <div
        className="bg-grid-light dark:bg-grid-dark h-full w-full"
        style={{
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
