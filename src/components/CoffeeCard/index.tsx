import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { DefaultText, Headers } from "../Text";
import { BuyInfo, Cart, CoffeeAvatar, CoffeeCardBox, CoffeeInfo, CoffeeName, CoffeeTag, CoffeeTagGroup, MathOperators, QuantityController } from "./styles";

interface CoffeeProps {
    // id: number
    name: string
    description: string
    imageURL: string
    price: number
    tags: string[]
}

export function CoffeeCard(props: CoffeeProps) {
    const { description, imageURL, name, price, tags } = props
    return (
        <CoffeeCardBox>
            <CoffeeAvatar src={imageURL} />
            <CoffeeTagGroup>
                {
                    tags.map((tag) => {
                        return (
                            <CoffeeTag>
                                <DefaultText color="yellow-dark" fontSize="10px" fontWeight="Bold">
                                    {tag}
                                </DefaultText>
                            </CoffeeTag>
                        )
                    })
                }
            </CoffeeTagGroup>
            <CoffeeName >
                <Headers fontSize="20px" fontWeight="Bold">
                    {name}
                </Headers>
            </CoffeeName>
            <CoffeeInfo>
                <DefaultText color="base-subtitle" fontSize="14px" fontWeight="normal">
                    {description}
                </DefaultText>
            </CoffeeInfo>
            <BuyInfo>
                <DefaultText color="base-subtitle">
                    R$
                </DefaultText>
                <Headers fontSize="18px" fontWeight="Bold">
                    {price / 100}
                </Headers>
                <QuantityController>
                    <MathOperators>
                        <Minus weight="bold" />
                    </MathOperators>
                    <DefaultText color="base-subtitle" fontWeight="Bold" fontSize="16px">1</DefaultText>
                    <MathOperators>
                        <Plus weight="bold" />
                    </MathOperators>
                </QuantityController>
                <Cart>
                    <ShoppingCart weight="fill" />
                </Cart>
            </BuyInfo>
        </CoffeeCardBox>
    )
} 