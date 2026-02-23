"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { fadeInUp } from "./motion-wrapper";
import React from "react";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -4 }}
        >
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-card h-full">
                <CardContent className="pt-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-landing-primary/10 text-landing-primary mb-4">
                        {icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    );
}
