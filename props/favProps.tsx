import { Card } from "../models/Card";

export interface CardProps{
    route : {
        card: Card;
        bool: boolean;
    }
}