import React, { PropsWithChildren } from "react";

import "./styles.scss"
import classNames from "classnames";
import NavItem from "../NavItem";
import Title from "../Title";

const Header: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
    return (
        <header
            className={classNames(
                "fixed w-full top-0 flex min-h-[40px] ease-in-out items-center justify-between bg-[--secondary-color] text-white "
                // "fixed w-full top-0 z-30 flex flex-wrap items-center justify-between text-gray-800 bg-black min-h-[2px] md:justify-start md:text-xl md:gap-7 px-7 py-5 duration-300 ease-in-out",
            )}
        >
            <Title>
                <NavItem >JCC 2023</NavItem>
            </Title>
            {/* <Nav>
                <NavItem scroll={() => scrollTo(infoRef)}>Info</NavItem>
                <NavItem scroll={() => scrollTo(cronogramaRef)}>Cronograma</NavItem>
                <NavItem scroll={() => scrollTo(actividadesRef)}>
                    Actividades
                </NavItem>
                <NavItem scroll={() => scrollTo(apoyoRef)}>Apoyo</NavItem>
                <NavItem scroll={() => scrollTo(jobSearchRef)}>Búsqueda</NavItem>
            </Nav>
            <MobileNav showHeader={showHeader}>
                <NavItem scroll={() => scrollTo(infoRef)}>Info</NavItem>
                <NavItem scroll={() => scrollTo(cronogramaRef)}>Cronograma</NavItem>
                <NavItem scroll={() => scrollTo(actividadesRef)}>
                    Actividades
                </NavItem>
                <NavItem scroll={() => scrollTo(apoyoRef)}>Apoyo</NavItem>
                <NavItem scroll={() => scrollTo(jobSearchRef)}>Búsqueda</NavItem>
            </MobileNav> */}
        </header >
    );
};

export default Header