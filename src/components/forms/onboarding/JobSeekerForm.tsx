import { UploadDropzone } from '@/components/general/UploadthingReexported'
import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem, FormMessage, FormControl, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { createJobSeeker } from '@/utils/actions'
import { countryList } from '@/utils/countriesList'
import { jobseekerSchema } from '@/utils/zodSchemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function JobSeekerForm() {
    const [pending, setPending] = useState(false)

    const form = useForm<z.infer<typeof jobseekerSchema>>({
        resolver: zodResolver(jobseekerSchema),
        defaultValues: {
            name: "",
            location: "",
            resume: "",
            about: "",
        }
    })

    async function onSubmit(data: z.infer<typeof jobseekerSchema>) {
            try {
                setPending(true);
                await createJobSeeker(data);
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
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder='Enter Your Full Name' {...field} />
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
                            <FormLabel>Your Location</FormLabel>
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
                    name="resume"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel>Upload Resume</FormLabel>
                            <FormControl>
                                {field.value ? (
                                    <div className='relative w-fit'>
                                        <Image src={'/images/pdf.png'} alt='PDF file' width={80} height={100} className='' />
                                        <Button type='button' className='absolute -top-2 -right-2' onClick={() => field.onChange('')}>
                                            <Trash2 className='text-white' />
                                        </Button>
                                    </div>
                                ) : (
                                    <UploadDropzone endpoint="resumeUploader"
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
