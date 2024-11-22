"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export default function ServiceForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({ name: "", phone: "", message: "" });
    };

    return (
        <div className="bg-primary-light rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6">Get Started Today</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-secondary-light mb-2">
                        Your Name
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-primary border border-border/10 rounded-lg focus:outline-none focus:border-[#e62332] transition-colors"
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-secondary-light mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-primary border border-border/10 rounded-lg focus:outline-none focus:border-[#e62332] transition-colors"
                        placeholder="Enter your phone number"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-secondary-light mb-2">
                        Message
                    </label>
                    <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-primary border border-border/10 rounded-lg focus:outline-none focus:border-[#e62332] transition-colors resize-none"
                        placeholder="Tell us about your project..."
                        rows={4}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full gradient-color text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                    Send Message
                    <Send className="h-5 w-5" />
                </button>
            </form>
        </div>
    );
}
