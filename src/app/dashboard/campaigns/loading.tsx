import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CirclePlus} from 'lucide-react'
import React from 'react'

function CampaignLoading() {

  return (
    <div className='p-4'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-4xl font-bold'>Campaigns</h1>
          <p className='text-gray-500 mt-2'>Manage your campaigns and track their performance.</p>
        </div>
        <Button variant="default"><CirclePlus size={15} />Create Campaign</Button>
      </div>
      <Card className='p-3 '>
      </Card>
    </div>
  )
}

export default CampaignLoading