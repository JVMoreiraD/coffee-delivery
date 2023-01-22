import { BenefitsContainer, IconContainer, MainDivContainer, MainSectionContainer, MainTextContainer } from "./styles";
import coffee from '../../assets/coffee-display.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { DefaultText, Headers } from "../Text";

export function MainSection() {
    return (
        <MainSectionContainer>
            <MainDivContainer>
                <div>
                    <MainTextContainer>
                        <Headers fontSize="48px" fontWeight="Bolder">
                            Encontre o café perfeito <br />para qualquer hora do dia
                        </Headers >
                        <DefaultText color="base-subtitle" fontSize="20px" fontWeight="normal" lineHeight={130} as="h3">
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </DefaultText >
                    </MainTextContainer>

                    <BenefitsContainer>
                        <div>
                            <IconContainer variant="yellow-dark">
                                <ShoppingCart weight="fill" size={16} />
                            </IconContainer>
                            <p>Compra simples e segura</p>
                        </div>
                        <div>
                            <IconContainer variant="yellow">
                                <Timer weight="fill" size={16} />
                            </IconContainer>
                            <p>Entrega rápida e rastreada</p>
                        </div>
                        <div>
                            <IconContainer variant="base-text">
                                <Package weight="fill" size={16} />
                            </IconContainer>
                            <p>Embalagem mantém o café intacto</p>
                        </div>
                        <div>
                            <IconContainer variant="purple">
                                <Coffee weight="fill" size={16} />
                            </IconContainer>
                            <p>O café chega fresquinho até você</p>
                        </div>
                    </BenefitsContainer>
                </div>
                <div>
                    <img src={coffee}></img>
                </div>
            </MainDivContainer>
        </MainSectionContainer>
    )
}