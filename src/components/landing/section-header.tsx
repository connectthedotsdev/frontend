"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MotionWrapper } from "./motion-wrapper";

interface SectionHeaderProps {
    badge?: string;
    title: string;
    description?: string;
    className?: string;
}

export function SectionHeader({ badge, title, description, className }: SectionHeaderProps) {
    return (
        <MotionWrapper className={cn("flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-16", className)}>
            {badge && (
                <Badge variant="outline" className="mb-4 border-landing-primary/30 text-landing-primary px-4 py-1 text-sm font-medium">
                    {badge}
                </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {title}
            </h2>
            {description && (
                <p className="text-muted-foreground text-lg leading-relaxed">
                    {description}
                </p>
            )}
        </MotionWrapper>
    );
}
