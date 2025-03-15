'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'
import { Loader2 } from 'lucide-react';

interface GeneralSubmitButtonProps{
    text: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    width: string;
    // image: string;
}

export function GeneralSubmitButton({ text, variant, width }: GeneralSubmitButtonProps) {

    const { pending } = useFormStatus(); 
    return (
        <Button  variant={variant} className={width}> 
            {pending ? (
                <>
                    <Loader2 className='size-4 animate-spin' />
                    <span>Submitting...</span>
                </>
            ) : (
                <>
                    <span>{text}</span>
                </>
            )}
        </Button>
    )
}
