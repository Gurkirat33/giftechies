import { getTeamMembers } from "./team/actions";
import { getPortfolioItems } from "./portfolio/actions";
import { getServices } from "./services/actions";
import { BarChart3, Users, Briefcase, ArrowUpRight, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [team, portfolio, services] = await Promise.all([
    getTeamMembers(),
    getPortfolioItems(),
    getServices(),
  ]);

  const stats = [
    {
      label: "Team Members",
      value: team.length,
      icon: Users,
      href: "/backend/team",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      label: "Portfolio Items",
      value: portfolio.length,
      icon: ImageIcon,
      href: "/backend/portfolio",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      label: "Services",
      value: services.length,
      icon: Briefcase,
      href: "/backend/services",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
  ];

  return (
    <div className="min-h-screen bg-primary px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-secondary">Dashboard</h1>
          <p className="mt-1 text-secondary-light">
            Welcome back! Here's an overview of your content.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Link
                key={stat.label}
                href={stat.href}
                className="group relative overflow-hidden rounded-xl bg-primary-light p-6 transition-all hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className={`rounded-lg ${stat.bgColor} p-3`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary-light">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-semibold text-secondary">
                      {stat.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="absolute right-4 top-4 h-6 w-6 text-secondary-light opacity-0 transition-all group-hover:opacity-100" />
              </Link>
            );
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Recent Portfolio */}
          <div className="rounded-xl bg-primary-light p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-secondary">
                Recent Portfolio Items
              </h2>
              <Link
                href="/backend/portfolio"
                className="text-sm text-secondary-light hover:text-secondary"
              >
                View all
              </Link>
            </div>
            <div className="space-y-4">
              {portfolio.slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  href={`/backend/portfolio/${item.id}`}
                  className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-primary"
                >
                  <div className="relative h-16 w-24 overflow-hidden rounded-lg">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary">{item.title}</h3>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {item.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-secondary/10 px-2 py-0.5 text-xs text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Team Members */}
          <div className="rounded-xl bg-primary-light p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-secondary">
                Team Members
              </h2>
              <Link
                href="/backend/team"
                className="text-sm text-secondary-light hover:text-secondary"
              >
                View all
              </Link>
            </div>
            <div className="space-y-4">
              {team.slice(0, 4).map((member) => (
                <Link
                  key={member.id}
                  href={`/backend/team/${member.id}`}
                  className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-primary"
                >
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary">{member.name}</h3>
                    <p className="text-sm text-secondary-light">{member.role}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Services Overview */}
          <div className="lg:col-span-2">
            <div className="rounded-xl bg-primary-light p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-secondary">Services</h2>
                <Link
                  href="/backend/services"
                  className="text-sm text-secondary-light hover:text-secondary"
                >
                  View all
                </Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services.slice(0, 3).map((service) => (
                  <Link
                    key={service.id}
                    href={`/backend/services/${service.id}`}
                    className="group relative overflow-hidden rounded-lg"
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                      <Image
                        src={service.imageUrl}
                        alt={service.heading}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-medium text-white">
                        {service.heading}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-white/80">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
