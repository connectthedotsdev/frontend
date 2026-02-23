import React from "react";
import Image from "next/image";

interface IProp {
    lang: string;
    width: number;
    height: number;
}

const Flag = ({
    lang,
    width,
    height,
    ...props
}: React.PropsWithChildren<IProp>) => (
    <Image
        src={`/images/${lang === "en" ? "US.png" : "SA.png"}`}
        alt={"Lang"}
        width={width}
        height={height}
        {...props}
        className={"box-fit"}
    />
);

export default Flag;
