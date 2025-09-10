import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Switch } from '../ui/switch'
import { ChevronDown } from 'lucide-react'
import { useUser } from '@/context/UserContext'
import Image from 'next/image'

function SettingsComponent( {campaignName}: {campaignName: string} ) {

  const user = useUser()

  return (
    <div>
      <Card className='relative font-semibold'>
        <CardHeader className=''>
          <CardTitle className='text-lg font-bold'>Campaign Settings</CardTitle>
          <Button className='rounded-3xl shadow-md bg-purple-400 hover:bg-purple-500 top-5 right-5 absolute'>Save All Changes</Button>
        </CardHeader>
        <CardContent>
          <Card className='m-3'>
            <CardHeader>
              <CardTitle className='font-semibold'>Campaign Details</CardTitle>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div>
                <h1 className='px-1 mb-2 text-sm font-semibold'>Campaign Name</h1>
                <Card className='h-2 flex justify-center px-4'>
                  {campaignName}
                </Card>
              </div>
              <hr />
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  Campaign Status
                  <Switch />
                </div>
                <div className='flex items-center gap-2'>
                  Request without personalization
                  <Switch />
                </div>

              </div>
              <hr />
              <div>
                <div className='flex justify-between items-center'>
                  <div>
                    <h1 className='text-xl mb-3 font-bold'>AutoPilot Mode</h1>
                    <p className='text-gray-500 font-normal'>Let the system automatically manage LinkedIn account assignments</p>
                  </div>
                  <Switch />
                </div>
                <div className="border rounded-2xl px-4 py-2 flex items-center justify-between cursor-pointer mt-5 text-sm text-gray-500 bg-gray-100">
                  <h1>
                    1 Selected Account
                  </h1>
                  <ChevronDown size={20} />
                </div>
              </div>
              <div>
                <h1 className='text-sm text-gray-500'>
                  Selected accounts:
                </h1>
                <div className='bg-purple-100 mt-2 text-sm inline-block rounded-xl px-2 py-1'>
                  <div className='flex gap-2'>
                    <Image className='rounded-full' src={user?.user?.image || "/avatar.svg"} alt={user.user?.name || "user"} height={18} width={18} />

                    {user.user?.name}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
        <CardContent>
          <Card>
            <CardHeader>
              <CardTitle className='text-md font-semibold'>Danger Zone</CardTitle>
              <CardDescription className='text-sm text-gray-500'>Irreversible and destructive actions</CardDescription>
            </CardHeader>
            <CardContent>
              <Card>
                <CardContent className='space-y-6'>
                  <div className='flex items-center justify-between'>
                    <div className='flex gap-3 flex-col'>
                      <h1 className='text-lg font-normal'>Delete Campaign</h1>
                      <p className='text-md text-gray-500 font-normal'>Permanently delete this campaign and all associated data</p>
                    </div>
                    <Button className='bg-red-500 text-white rounded-xl hover:bg-red-700'>Delete Campaign</Button>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}

export default SettingsComponent