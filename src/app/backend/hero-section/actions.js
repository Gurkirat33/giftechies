"use server";

import { getDbConnection } from "@/lib/auth";
import Hero from "@/models/hero.model";
import { revalidatePath } from "next/cache";

export async function getHeroSection(){
    try {
        await getDbConnection();
        const data = await Hero.find({}).lean();
        return data
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch hero sections");
    }
}

export async function createHeroSection(formData) {
    try {
        await getDbConnection();
        
        const heroData = {
            subHeading: formData.get("subHeading"),
            heading: formData.get("heading"),
            description: formData.get("description"),
            buttonUrl: formData.get("buttonUrl"),
            images: formData.getAll("images")
        };

        const hero = await Hero.create(heroData);
        revalidatePath("/backend/hero-section");
        return { success: true, data: hero };
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create hero section");
    }
}

export async function updateHeroSection(id, formData) {
    try {
        await getDbConnection();
        
        const heroData = {
            subHeading: formData.get("subHeading"),
            heading: formData.get("heading"),
            description: formData.get("description"),
            buttonUrl: formData.get("buttonUrl"),
            images: formData.getAll("images")
        };

        const hero = await Hero.findByIdAndUpdate(id, heroData, { new: true });
        revalidatePath("/backend/hero-section");
        return { success: true, data: hero };
    } catch (error) {
        console.log(error);
        throw new Error("Failed to update hero section");
    }
}

export async function deleteHeroSection(id) {
    try {
        await getDbConnection();
        await Hero.findByIdAndDelete(id);
        revalidatePath("/backend/hero-section");
        return { success: true };
    } catch (error) {
        console.log(error);
        throw new Error("Failed to delete hero section");
    }
}