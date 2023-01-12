import { useState } from "react";
import { Navbar } from "../navbar";
import * as S from "./style"

export const Burger = () => {

    const [open, setOpen] = useState(false)
    return (
        <>
            <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </S.StyledBurger>
            <Navbar open={open} />
        </>
    )
}