import { BenefitsContainer, IconContainer, MainSectionContainer } from "./styles";
import coffee from '../../assets/coffee-display.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function MainSection() {
    return (
        <MainSectionContainer>
            <div>
                <section>
                    <div>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
                    </div>
                </section>

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
            <img src={coffee}></img>
        </MainSectionContainer>
    )
}