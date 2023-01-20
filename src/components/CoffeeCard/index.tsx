import { MathOperations, Plus, ShoppingCart } from "phosphor-react";
import { DefaultText, Headers } from "../Text";
import { BuyInfo, Cart, CoffeeAvatar, CoffeeCardBox, CoffeeInfo, CoffeeName, CoffeeTag, QuantityController } from "./styles";



export function CoffeeCard() {
    return (
        <CoffeeCardBox>
            <CoffeeAvatar src="/assets/Image.svg" />
            <CoffeeTag>
                <DefaultText fontSize="10px" fontWeight="Bold" uppercase>
                    Tradicional
                </DefaultText>
            </CoffeeTag>
            <CoffeeName >
                <Headers fontSize="20px" fontWeight="Bold">
                    Expresso Tradicional
                </Headers>
            </CoffeeName>
            <CoffeeInfo>
                <DefaultText fontSize="14px" fontWeight="normal" uppercase>
                    O tradicional café feito com água quente e grãos moídos
                </DefaultText>
            </CoffeeInfo>
            {/* <BuyInfo>
                <Cart>
                    <ShoppingCart weight="fill" />
                </Cart>
                <QuantityController>
                    <MathOperations>
                        <Plus />
                    </MathOperations>
                    <DefaultText fontWeight="Bold" fontSize="16px">1</DefaultText>
                    <MathOperations>
                        <Plus />
                    </MathOperations>
                </QuantityController>
            </BuyInfo> */}
        </CoffeeCardBox>
    )
} 