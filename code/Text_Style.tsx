import * as React from "react"
import { Override, Data, addPropertyControls, ControlType } from "framer"

const linkStyle = {
    color: "#080A0B",
    textDecoration: "underline",
}

export function TextElement(props): Override {
    return {
        style: linkStyle,
    }
}
