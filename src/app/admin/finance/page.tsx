import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import AddFinance from '@/components/admin/finance/AddProjects'


export default function page() {
    return (
        <div>
            <div className='flex flex-row items-center justify-between w-full'>
                <div>
                    <h1 className='text-3xl font-bold text-primary'>Finance my Project</h1>
                </div>
                <div>
                    <Dialog>
                        <DialogTrigger>
                            <Button className='bg-primary hover:bg-green-800 text-white'>Add Finance My Project</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogDescription>
                                    <AddFinance/>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}
