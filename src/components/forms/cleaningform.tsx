/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { GooglePlacesInput } from './GooglePlacesInput'

const cleaningSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email(),
    phone: z.string().min(7),
    address: z.string().min(1),
    aptSuite: z.string().optional(),
    bedrooms: z.coerce.number().optional(),
    bathrooms: z.coerce.number().optional(),
    cleaningType: z.enum(['STANDARD', 'DEEP', 'MOVE_OUT']).optional(),
    contactType: z.enum(['PHONE', 'EMAIL']).optional(),
    date: z.string().optional(), // keep as string for easier binding
    time: z.string().optional(),
    description: z.string().optional(),
})

type CleaningFormData = z.infer<typeof cleaningSchema>

export default function CleaningFormPage() {
    const [step, setStep] = useState(0)
    const methods = useForm<CleaningFormData>({
        resolver: zodResolver(cleaningSchema),
        mode: 'onTouched',
    })

    const { register, handleSubmit, setValue } = methods

    const onSubmit = async (data: CleaningFormData) => {
        try {
            const response = await fetch('/api/cleaning', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            if (!response.ok) throw new Error('Submission failed')
            alert('Form submitted successfully!')
        } catch (error) {
            console.error('Submission error:', error)
            alert('Something went wrong.')
        }
    }

    const steps = [
        <div key="step1" className="space-y-4">
            <h3 className='text-primary font-bold mb-4'> Whats your Location?</h3>
            {/* <Input placeholder="Address" {...register('address')} /> */}
            <GooglePlacesInput
                value={methods.watch('address')}
                onChange={(val) => methods.setValue('address', val)}
                placeholder="Search for your address"
            />

        </div>,

        <div key="step2" className="space-y-4">
            <Input placeholder="First Name" {...register('firstName')} />
            <Input placeholder="Last Name" {...register('lastName')} />
            <Input type="email" placeholder="Email" {...register('email')} />
            <Input placeholder="Phone" {...register('phone')} />
        </div>,
        <div key="step3" className="space-y-4">
            <Input placeholder="Apt/Suite (optional)" {...register('aptSuite')} />
            <Input type="number" placeholder="Bedrooms" {...register('bedrooms')} />
            <Input type="number" placeholder="Bathrooms" {...register('bathrooms')} />
        </div>,

        <div key="step4" className="space-y-4">
            <Select onValueChange={(val) => setValue('cleaningType', val as any)}>
                <SelectTrigger>
                    <SelectValue placeholder="Cleaning Type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="STANDARD">Standard</SelectItem>
                    <SelectItem value="DEEP">Deep</SelectItem>
                    <SelectItem value="MOVE_OUT">Move Out</SelectItem>
                </SelectContent>
            </Select>

            <Select onValueChange={(val) => setValue('contactType', val as any)}>
                <SelectTrigger>
                    <SelectValue placeholder="Preferred Contact Method" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="PHONE">Phone</SelectItem>
                    <SelectItem value="EMAIL">Email</SelectItem>
                </SelectContent>
            </Select>

            <Input type="date" {...register('date')} />
            <Input type="time" {...register('time')} />
            <Textarea placeholder="Additional Instructions" {...register('description')} />
        </div>,
    ]

    return (
        <div className="max-w-[800px] mx-auto mt-10 p-4 border rounded-xl shadow-sm">
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} onKeyDown={(e) => {
                    if (e.key === 'Enter' && step < steps.length - 1) {
                        e.preventDefault()
                    }
                }} className="space-y-6">
                    <h2 className="text-xl font-semibold">Step {step + 1} of {steps.length}</h2>
                    {steps[step]}

                    <div className="flex justify-between pt-4">
                        {step > 0 && (
                            <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                                Back
                            </Button>
                        )}
                        {step < steps.length - 1 ? (
                            <Button type="button" onClick={() => setStep(step + 1)}>
                                Next
                            </Button>
                        ) : (
                            <Button type="submit">Submit</Button>
                        )}
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}
