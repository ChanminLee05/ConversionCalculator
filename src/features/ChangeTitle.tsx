import React from "react";
import {converterType} from "../entities/ConverterType";

export const changeTitle = ( fromOption: string, toOption: string, titleRef: React.RefObject<HTMLHeadingElement>) => {
    if (titleRef.current) {
        const key = `${fromOption}-${toOption}`;
        titleRef.current.innerText = converterType[key];
    }
}