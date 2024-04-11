import FAQ from "./ask/FAQ"
import CallToAction from "./callToAction/CallToAction"
import { EnterpriseCarrossel } from "./carrossel/EnterpriseCarrossel"
import { Costumers } from "./costumers/Costumers"
import { Feature } from "./features/Feature"
import { Presentation } from "./presentation/Presentation"
import Rate from "./rate/Rate"

const style = {
    width: "100%",

}


export function Home() {
  return (
    <div style={style}>
        <Presentation/>
        <EnterpriseCarrossel/>
        <Feature/>
        <Costumers/>
        <Rate/>
        <CallToAction/>
        <FAQ/>
    </div>
  )
}
