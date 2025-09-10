import React from 'react'
import { Card, CardContent } from '../ui/card'
import { CircleDotDashed, Mail, MessageSquare, Users } from 'lucide-react'
import { Progress } from "@/components/ui/progress"

function Overview({ campaignName, campaignStatus, campaignDate, leadCount, acceptedRate, conversionCount, respondedCount, requestedCount }: { campaignName: string, campaignStatus: string, campaignDate: string, leadCount: number, acceptedRate?: number, conversionCount?: number, respondedCount?: number, requestedCount?: number }) {

    const leadsContacted = leadCount ? ((requestedCount || 0) / leadCount) * 100 : 0;
    const acceptanceRate = leadCount ? ((acceptedRate || 0) / leadCount) * 100 : 0;
    const replyRate = leadCount ? ((respondedCount || 0) / leadCount) * 100 : 0;
    const conversionRate = leadCount ? ((conversionCount || 0) / leadCount) * 100 : 0;

    return (
        <div className='flex flex-col gap-6'>
            <div className='flex gap-3 items-center'>
                <Card className="flex-1 relative">
                    <CardContent>
                        <p className='text-gray-500 text-sm'>Total Leads</p>
                        <h1 className='font-bold text-2xl'>{leadCount}</h1>
                    </CardContent>
                    <span className='rounded-full bg-purple-100 text-purple-500 p-2 absolute top-4 right-4'>
                        <Users size={14} />
                    </span>
                </Card>
                <Card className="flex-1 relative">
                    <CardContent>
                        <p className='text-gray-500 text-sm'>Request Sent</p>
                        <h1 className='font-bold text-2xl'>{requestedCount}</h1>
                    </CardContent>
                    <span className='rounded-full bg-purple-100 text-purple-500 p-2 absolute top-4 right-4'>
                        <Mail size={14} />
                    </span>
                </Card>
                <Card className="flex-1 relative">
                    <CardContent>
                        <p className='text-gray-500 text-sm'>Request Accepted</p>
                        <h1 className='font-bold text-2xl'>{acceptedRate}</h1>
                    </CardContent>
                    <span className='rounded-full bg-purple-100 text-purple-500 p-2 absolute top-4 right-4'>
                        <MessageSquare size={14} />
                    </span>
                </Card>
                <Card className="flex-1 relative">
                    <CardContent>
                        <p className='text-gray-500 text-sm'>Request Replied</p>
                        <h1 className='font-bold text-2xl'>{respondedCount}</h1>
                    </CardContent>
                    <span className='rounded-full bg-purple-100 text-purple-500 p-2 absolute top-4 right-4'>
                        <CircleDotDashed size={14} />
                    </span>
                </Card>
            </div>
            <div className='flex gap-3 text-sm font-semibold'>
                <Card className='flex-1'>
                    <CardContent>
                        <h1 className='font-bold text-2xl mb-4'>
                            Campaign Progress
                        </h1>
                        <div className='mb-4'>
                            <div className='flex text-gray-500 justify-between'>
                                <p>Leads Contacted</p>
                                <p>{leadsContacted} %</p>
                            </div>

                            <Progress value={leadsContacted} className="mt-2" />
                        </div>
                        <div className='mb-4'>
                            <div className='flex text-gray-500  justify-between'>
                                <p>Acceptance Rate</p>
                                <p>{acceptanceRate} %</p>
                            </div>

                            <Progress value={acceptanceRate} className="mt-2" />
                        </div>
                        <div className='mb-2'>
                            <div className='flex text-gray-500  justify-between'>
                                <p>Reply Rate</p>
                                <p>{replyRate} %</p>
                            </div>

                            <Progress value={replyRate} className="mt-2" />
                        </div>
                    </CardContent>
                </Card>
                <Card className='flex-1'>
                    <CardContent>
                        <h1 className='font-bold text-2xl mb-4'>
                            Campaign Details
                        </h1>
                        <div className='flex flex-col gap-4 text-sm text-gray-600'>
                            <div className='flex justify-between'>
                                <p className='font-semibold'>Campaign Name:</p>
                                <p>{campaignName}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='font-semibold'>Created On:</p>
                                <p>{campaignDate}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='font-semibold'>Status:</p>
                                <p className={campaignStatus === "Active"? `text-green-500`: `text-red-500`}>{campaignStatus}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='font-semibold'>Convesion Rate:</p>
                                <p>{conversionRate} %</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Overview