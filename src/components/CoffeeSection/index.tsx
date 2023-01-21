import { CoffeeCard } from "../CoffeeCard";
import { Headers } from "../Text";
import { CoffeeListContainer, OurCoffeesContainer } from "./styles";

export function CoffeeSection() {
    return (
        <div>
            <OurCoffeesContainer>
                <Headers fontSize="32px" fontWeight="Bolder">Nossos Cafés</Headers>
                <CoffeeListContainer>
                    <CoffeeCard></CoffeeCard>
                    <CoffeeCard></CoffeeCard>
                </CoffeeListContainer>
            </OurCoffeesContainer>
        </div>
    )
}