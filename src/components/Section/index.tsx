import { PropsWithChildren, forwardRef } from "react";

import "./styles.scss"

const Section = forwardRef<HTMLDivElement, PropsWithChildren>(
    ({ children }, ref) => {
        return (
            <section
                ref={ref}
                className="flex flex-col items-center justify-center gap-10 p-5 rounded shadow-lg md:p-10 scroll-m-16"
            >
                {children}
            </section>
        );
    }
);

export default Section