"use client"
import { companySchema } from '@/utils/zodSchemas'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { UploadDropzone } from '@/components/general/UploadthingReexported'
import { createCompany } from '@/utils/actions'
import { Button } from '@/components/ui/button'
import { SelectGroup, SelectLabel } from '@radix-ui/react-select'
import { countryList } from '@/utils/countriesList'
import Image from 'next/image'
import { Trash2 } from 'lucide-react'


export default function CompanyForm() {


    const form = useForm<z.infer<typeof companySchema>>({
        resolver: zodResolver(companySchema),
        defaultValues: {
            name: "",
            email: "",
            about: "",
            location: "",
            website: "",
            logo: "",
        },
    })

    const [pending, setPending] = useState(false)

    async function onSubmit(data: z.infer<typeof companySchema>) {
        try {
            setPending(true);
            await createCompany(data);
        } catch (erro) {
            if (erro instanceof Error && erro.message !== "NEXT_REDIRECT") {
                console.log("something went wrong");
            }
        } finally {
            setPending(false);
        }
    }


    return (
        <Form {...form}>
            <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                    <Input placeholder='Enter Company Name' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Company Location</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl className='w-full'>
                                        <SelectTrigger>
                                            <SelectValue placeholder='Search Location...' />
                                        </SelectTrigger>
                                    </FormControl> 
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Worldwide.</SelectLabel>
                                            <SelectItem value="Worldwide"> Worldwide/Remote</SelectItem>
                                        </SelectGroup>
                                        <SelectGroup>
                                            <SelectLabel>Location</SelectLabel>
                                            {countryList.map((country) => (
                                                <SelectItem key={country.code} value={country.name}>
                                                    <span>{country.flagEmoji}</span>
                                                    <span className='pl-2'>{country.name}</span>
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder='Enter Company Email' {...field} type='email' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Website</FormLabel>
                                <FormControl>
                                    <Input placeholder='http://yourcompany.com' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="about"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>About</FormLabel>
                            <FormControl>
                                <Textarea placeholder='Tell Us about your company...' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="logo"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel>Company Logo</FormLabel>
                            <FormControl>
                                {field.value ? (
                                    <div className='relative w-fit'>
                                        <Image src={field.value} alt='Logo' width={100} height={100} className='rounded-lg border-1 border-primary' />
                                        <Button type='button' className='absolute -top-2 -right-2' onClick={() => field.onChange('')}>
                                            <Trash2 className='text-white' />
                                        </Button>
                                    </div>
                                ): (
                                    <UploadDropzone endpoint="imageUploader"
                                    onClientUploadComplete={(res) => {
                                        field.onChange(res[0].url);
                                    }}
                                    onUploadError={(error: Error) => {
                                        // Do something with the error.
                                        alert(`ERROR! ${error.message}`);
                                    }}
                                    className='ut-button:bg-primary ut-button:text-white ut-button:hover:bg-primary/80 ut-button:hover:text-white ut-label:text-muted-foreground ut-allowed-content:text-muted-foreground ut-upload-icon:size-20 ut-upload-icon:text-primary ut-button:px-10 ut-button:my-3 ut-dropzone:p-4 border-primary rounded-md py-4'
                                />
                                )}
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit' disabled={pending} className='w-full text-white'>
                    {pending ? "Submitting..." : "Continue"}
                </Button>
            </form>
        </Form>
    )
}
