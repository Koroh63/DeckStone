import { Card } from "../models/Card"

export class StubLib {
    
    public getCards(): Card[] {
        const NOUNOURS_LIST : Card[] = [
            new Card("c1","Chewie"),
            new Card("r2","Rupert"),
            new Card("a3","Ronflex"),
        ]
        return NOUNOURS_LIST
    }
}

