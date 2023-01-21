import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { DefaultText, Headers } from "../Text";
import { BuyInfo, Cart, CoffeeAvatar, CoffeeCardBox, CoffeeInfo, CoffeeName, CoffeeTag, MathOperators, QuantityController } from "./styles";



export function CoffeeCard() {
    return (
        <CoffeeCardBox>
            <CoffeeAvatar src="/assets/Image.svg" />
            <CoffeeTag>
                <DefaultText fontSize="10px" fontWeight="Bold">
                    Tradicional
                </DefaultText>
            </CoffeeTag>
            <CoffeeName >
                <Headers fontSize="20px" fontWeight="Bold">
                    Expresso Tradicional
                </Headers>
            </CoffeeName>
            <CoffeeInfo>
                <DefaultText fontSize="14px" fontWeight="normal">
                    O tradicional café feito com água quente e grãos moídos
                </DefaultText>
            </CoffeeInfo>
            <BuyInfo>
                <QuantityController>
                    <MathOperators>
                        <Minus weight="bold" />
                    </MathOperators>
                    <DefaultText fontWeight="Bold" fontSize="16px">1</DefaultText>
                    <MathOperators>
                        <Plus weight="bold" />
                    </MathOperators>
                </QuantityController>
                {/* <Cart>
                    <ShoppingCart weight="fill" />
                </Cart> */}
            </BuyInfo>
        </CoffeeCardBox>
    )
} 