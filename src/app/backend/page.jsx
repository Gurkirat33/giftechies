export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-lg bg-primary-light p-6 shadow">
        <h2 className="mb-4 text-lg font-semibold text-secondary">
          Welcome to Dashboard
        </h2>
        <p className="text-secondary-light">
          This is your main dashboard page.
        </p>
      </div>
    </div>
  );
}
