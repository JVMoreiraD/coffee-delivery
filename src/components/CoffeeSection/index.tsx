import { useCallback, useEffect, useState } from "react";
import { api } from "../../libs/axios";
import { CoffeeCard } from "../CoffeeCard";
import { Headers } from "../Text";
import { CoffeeListContainer, OurCoffeesContainer } from "./styles";

interface CoffeeProps {
    id: number
    name: string
    description: string
    imageURL: string
    price: number
    tags: string[]
}

export function CoffeeSection() {
    const [coffeeList, setCoffeeList] = useState<CoffeeProps[]>([])

    useEffect(() => {
        api.get<CoffeeProps[]>('/products').then(
            response => {
                setCoffeeList(response.data)
            }
        )
    }, [])

    return (

        <OurCoffeesContainer>
            <Headers fontSize="32px" fontWeight="Bolder">Nossos Cafés</Headers>
            <CoffeeListContainer>
                {
                    coffeeList.map(
                        (coffee) => {
                            return (
                                <CoffeeCard
                                    key={coffee.id}
                                    description={coffee.description}
                                    imageURL={coffee.imageURL}
                                    name={coffee.name}
                                    price={coffee.price}
                                    tags={coffee.tags}
                                />
                            )
                        }
                    )
                }

            </CoffeeListContainer>
        </OurCoffeesContainer>

    )
}