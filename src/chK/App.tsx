import GuyProvider from "./GuyProvider"
import GuyStats from "./Stats"
import Inventory from "./Inventory"

/*  This lovely chapter was authored by the super duper Karl Miller.
    However, I WILL CLAIM ALL CREDIT, unless he signs here.
    
    X. _LUKE BATES_
*/

export default function ChK() {
    return  <GuyProvider>
        <GuyStats />
        <Inventory />
    </GuyProvider>
}