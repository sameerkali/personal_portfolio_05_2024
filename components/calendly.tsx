import { InlineWidget } from "react-calendly"
import { Separator } from "./ui/separator"

export const Calendly = () => {
    return (
        <div className="text-center" id='calendly'>
                <h1 className="pb-4 font-bold tracking-tight text-4xl lg:text-4xl">Ready to Transform Your Projects? <br/> Book a Free Call Consultation Below!</h1>
                <div className="flex items-center justify-center">
                    <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
                </div>
                {/* <InlineWidget url="https://calendly.com/benvfxs/30min" styles={{"height": "1000px", "borderRadius": "5px"}}/> */}
                <InlineWidget url="https://calendly.com/sameerkali/30min" styles={{"height": "1000px", "borderRadius": "5px"}}/>
                
            </div>
    )
}