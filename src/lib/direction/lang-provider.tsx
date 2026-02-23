"use client";

import React, { createContext, PropsWithChildren, useContext } from "react";
import { DEFAULT_LANGUAGE } from "../constants";


const LangContext = createContext<{
    lang: string;
    textDir: "rtl" | "ltr";
}>({
    lang: DEFAULT_LANGUAGE,
    textDir: DEFAULT_LANGUAGE === "en" ? "ltr" : "rtl",
});

export const LangProvider = ({
    children,
    lang,
}: PropsWithChildren<{ lang: string }>) => {
    return (
        <LangContext.Provider
            value={{
                lang,
                textDir: lang === "ar" ? "rtl" : "ltr",
            }}
        >
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => useContext(LangContext);