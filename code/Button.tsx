import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import { FontAwesomeIcon } from "@fortawesome/fontawesome-pro"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core"
// import { far } from "@fortawesome/pro-regular-svg-icons"
import * as Icons from '@fortawesome/pro-light-svg-icons';
// import * as Icons from '@fortawesome/pro-solid-svg-icons';
import styled from "styled-components"


interface Props {
    weight: string
    height: number
    width: number
    color: string
    isPrimary: boolean
    isOutline: boolean
    label: string
    isIcon: boolean
    icon: string
    backgroundColor: string
    textColor: string
    fontFamily:
        | "-apple-system"
        | "Arial"
        | "Courier"
        | "Courier New"
        | "Futura"
        | "Geneva"
        | "Georgia"
        | "Gill Sans"
        | "Helvetica"
        | "Helvetica Neue"
        | "Lucida Grande"
        | "Menlo"
        | "Monaco"
        | "Tahoma"
        | "Times"
        | "Verdana"
    fontSize: "12" | "14" | "16" | "18" | "20" | "22" | "24"
    fontWeight:
        | "100"
        | "200"
        | "300"
        | "400"
        | "500"
        | "600"
        | "700"
        | "800"
        | "900"
    letterSpacing: number
    textTransform: "none" | "lowecase" | "uppercase"
    borderRadius: number
    borderWidth: number
}

const StyledButton = styled<Props, any>("button")`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${(props) =>
        props.isPrimary
            ? props.backgroundColor
            : props.isOutline
            ? "transparent"
            : props.backgroundColor};
    color: ${(props) =>
        props.isPrimary
            ? props.textColor
            : props.isOutline
            ? props.backgroundColor
            : props.textColor};
    border-width: ${(props) => (props.isOutline ? props.borderWidth : 1)}px;
    border-style: solid;
    border-color: ${(props) => props.backgroundColor};
    border-radius: ${(props) => props.borderRadius}px;
    box-shadow: ${(props) =>
        props.isPrimary
            ? "0 6px 8px rgba(0, 0, 0, .12)"
            : props.isOutline && "none"};
    overflow: hidden;
`

const StyledButtonInner = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
`

const IconContainer = styled<Props, any>("span")`
    font-size: ${(props) => props.fontSize}px;
    margin-right: ${(props) => Number(props.fontSize) / 2}px;
`

const StyledText = styled<Props, any>("span")`
    font-family: ${(props) => props.fontFamily};
    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props) => props.fontSize}px;
    letter-spacing: ${(props) => props.letterSpacing / 100}em;
    text-transform: ${(props) => props.textTransform};
`

// DA CONSIDERARE
// export class Light extends React.Component<Props> {
//     // Set default properties
//     static defaultProps = {
//         icon: "faAddressBook",
//         height: 24,
//         width: 24,
//         color: "rgba(150,150,150,1)",
//     };
// }


export class Button extends React.Component<Props> {
    static defaultProps = {
        width: 160,
        height: 44,
        isPrimary: false,
        isOutline: false,
        label: "Hello Friend!",
        isIcon: true,
        icon: "faAddressBook",
        backgroundColor: "#03A9F4",
        textColor: "white",
        fontFamily: "-apple-system",
        fontSize: "16",
        fontWeight: "600",
        letterSpacing: 2,
        textTransform: "none",
        borderRadius: 8,
        borderWidth: 1,
    }

    static propertyControls: PropertyControls<Props> = {
        isPrimary: { type: ControlType.Boolean, title: "Primary" },
        isOutline: {
            type: ControlType.Boolean,
            hidden: (props) => props.isPrimary,
            title: "Outline",
        },
        isIcon: { type: ControlType.Boolean, title: "Show Icon" },
        // icon: {
        //     type: ControlType.String,
        //     hidden: (props) => !props.isIcon,
        //     title: "Icon Name",
        // },


        icon: {
            type: ControlType.Enum,
            hidden: (props) => !props.isIcon,
            title: "Icon Name",
            options: Object.keys(Icons[Icons.prefix]),
            optionTitles: Object.keys(Icons[Icons.prefix]).map(key => {
                const name = Icons[key].iconName.replace(/-/g, " ");
                return name.charAt(0).toUpperCase() + name.slice(1);
            })
        },
        color: { type: ControlType.Color, title: "Color" },
        label: { type: ControlType.String, title: "Button Label" },
        backgroundColor: { type: ControlType.Color, title: "Background Color" },
        textColor: {
            type: ControlType.Color,
            hidden: (props) => props.isOutline && !props.isPrimary,
            title: "Text Color",
        },
        fontFamily: {
            type: ControlType.Enum,
            options: [
                "-apple-system",
                "Arial",
                "Courier",
                "Courier New",
                "Futura",
                "Geneva",
                "Georgia",
                "Gill Sans",
                "Helvetica",
                "Helvetica Neue",
                "Lucida Grande",
                "Menlo",
                "Monaco",
                "Tahoma",
                "Times",
                "Verdana",
            ],
            title: "Font Family",
        },
        fontSize: {
            type: ControlType.Enum,
            options: ["12", "14", "16", "18", "20", "22", "24"],
            title: "Font Size",
        },
        fontWeight: {
            type: ControlType.Enum,
            options: [
                "100",
                "200",
                "300",
                "400",
                "500",
                "600",
                "700",
                "800",
                "900",
            ],
            title: "Font Weight",
        },
        textTransform: {
            type: ControlType.SegmentedEnum,
            options: ["none", "lowercase", "uppercase"],
            optionTitles: ["None", "Lower", "Upper"],
            title: "Text Transform",
        },
        letterSpacing: {
            type: ControlType.Number,
            min: 0,
            max: 50,
            title: "Letter Spacing",
        },
        borderRadius: { type: ControlType.Number, title: "Border Radius" },
        borderWidth: { type: ControlType.Number, title: "Border Width" },
    }

    render() {
        const {
            isPrimary,
            isOutline,
            backgroundColor,
            textColor,
            icon,
            label,
            fontFamily,
            fontSize,
            fontWeight,
            letterSpacing,
            textTransform,
            isIcon,
            borderRadius,
            borderWidth,
        } = this.props
        return (
            <StyledButton
                isPrimary={isPrimary}
                isOutline={isOutline}
                backgroundColor={backgroundColor}
                textColor={textColor}
                borderRadius={borderRadius}
                borderWidth={borderWidth}
            >
                <StyledButtonInner>
                    {isIcon && (
                        <IconContainer
                            style={{ width: this.props.width, height: this.props.height }}
                            color={this.props.color}
                            icon={Icons[this.props.icon]}
                            fixedWidth={true}
                        >
                            {icon}
                        </IconContainer>
                    )}
                    <StyledText
                        fontFamily={fontFamily}
                        fontSize={fontSize}
                        fontWeight={fontWeight}
                        letterSpacing={letterSpacing}
                        textTransform={textTransform}
                    >
                        {label}
                    </StyledText>
                </StyledButtonInner>
            </StyledButton>
        )
    }
}
//ciao
