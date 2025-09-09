import { Clock, LucideIcon } from "lucide-react"
import React from "react"

function CustomButton({icon, text, color}: {icon?: LucideIcon, text?: string, color?: string}) {
    return (
        <div className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ${color} font-medium`}>
            {icon
                ? React.createElement(icon || Clock, { className: "h-3 w-3" })
                : null}
            {text || "No Status"}
        </div>
    )
}

export default CustomButton