"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ServicesSidebar({ services }) {
    const pathname = usePathname();

    return (
        <div className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-primary-light rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                <div className="space-y-2">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            className={`block py-2 px-3  transition-colors ${
                                pathname === `/services/${service.slug}`
                                ? "border-b border-red-400 gradient-color-text"
                                : "hover:bg-secondary/5"
                            }`}
                        >
                            {service.heading}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
