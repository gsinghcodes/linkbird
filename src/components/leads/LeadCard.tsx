import CustomButton from "../custom-button"
import { Card, CardContent } from "../ui/card"
import { statusColors, statusSymbols } from "./LeadsTable"
import { Lead } from "@/stores/leadStore"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Megaphone, Trash2 } from "lucide-react"

function LeadCard({ lead }: { lead: Lead }): React.JSX.Element {
    return (
        <Card>
            <CardContent>
                <div className="relative">
                    <div className="flex flex-col gap-2">
                        <div>
                            <h2 className="text-xl font-bold">{lead.name}</h2>
                            <h3 className="text-sm font-semibold">{lead.company}</h3>
                            <div className="flex gap-3">
                                <div className="text-sm flex items-center gap-1 text-gray-500">
                                    <Megaphone size={14} />
                                    {lead.campaignName}
                                </div>
                                {lead.status && (
                                    <CustomButton
                                        icon={statusSymbols[lead.status]}
                                        text={lead.status}
                                        color={statusColors[lead.status]}
                                    />
                                )}
                            </div>
                        </div>
                        <Accordion className="focus:outline-none" type="single" collapsible>
                            <AccordionItem className="focus:outline-none" value="item-1">
                                <AccordionTrigger className="focus:outline-none">Additional Profile Info</AccordionTrigger>
                                <AccordionContent>
                                    {lead.email}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="absolute right-0 top-0 cursor-pointer text-red-500 hover:text-red-600">
                        <Trash2 size={17} />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default LeadCard
