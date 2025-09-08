import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

// type LinkedinAccountsProps = {
//     id: number;
//     accountName: string;
//     email: string;
//     status: string;
//     requests: number;
// }

import { linkedinaccounts } from "../../../dummydata/linkedinaccounts";

import { Progress } from "@/components/ui/progress"
import { Button } from "../ui/button";
import { ChevronsUpDown, CircleCheckBig } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { SidebarMenuButton } from "../ui/sidebar";
import Image from "next/image";

export function AccountsTable(): React.JSX.Element {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-gray-500">Account</TableHead>
                    <TableHead className="text-gray-500">Status</TableHead>
                    <TableHead className="text-gray-500">Requests</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {linkedinaccounts.map((account) => (
                    <TableRow key={account.id} className="hover:cursor-pointer hover:bg-gray-100" >
                        {/* Account Column */}
                        <TableCell className="flex items-center gap-3 max-w-50 ">
                            <img
                                src={account.img}
                                alt={account.accountname}
                                className="rounded-full h-8 w-8 object-cover"
                            />
                            <div className="flex flex-col overflow-hidden">
                                <span className="truncate font-medium text-xs">
                                    {account.accountname}
                                </span>
                                <span className="truncate text-gray-500 text-xs">
                                    {account.email}
                                </span>
                            </div>
                        </TableCell>

                        {/* Status Column */}
                        <TableCell className="max-w-16 ">
                            <div className="bg-blue-700 text-white flex items-center justify-center gap-1 rounded-sm text-xs">
                                <CircleCheckBig size={12} color="white" />
                                {account.status}
                            </div>
                        </TableCell>

                        {/* Requests Column */}
                        <TableCell >
                            <div className="flex pl-4 min-h-fulljustify-end items-center gap-2">
                            <Progress className="flex-1 h-2 rounded-full" value={(account.requests / 9) * 100} />
                            <span className="text-gray-500 text-xs">{account.requests}/9</span>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
