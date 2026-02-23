"use client";
import React from "react";
import {DirectionProvider as RadixDirectionProvider} from "@radix-ui/react-direction";

interface DirectionProviderProps {
    children: React.ReactNode;
    locale: string;
}

const DirectionProvider: React.FC<DirectionProviderProps> = ({children, locale}) => {

    const direction = locale === "ar" ? "rtl" : "ltr";

    return (
        <RadixDirectionProvider dir={direction}>
            {children}
        </RadixDirectionProvider>
    );
};

export default DirectionProvider;