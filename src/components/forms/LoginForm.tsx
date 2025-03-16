import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card' 
import { auth, signIn } from '@/lib/auth';
import { GeneralSubmitButton } from '../general/SubmitButton';
import { redirect } from 'next/navigation';

export async function LoginForm() {
    const session = await auth();

    if (session?.user) {
        return redirect("/")
    }
    return (
        <div className='flex flex-col gap-6'>
            <Card>
                <CardHeader className='text-center'>
                    <CardTitle className='text-xl'>Welcome Back</CardTitle>
                    <CardDescription>
                        Login With Social Acccounts
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='flex flex-col gap-4'>
                        <form>
                            <input type="text" placeholder="Email" className="w-full border-none shadow-none outline-none" />
                            <input type="password" placeholder="Password" className="w-full border-none shadow-none outline-none" />
                        </form>
                        <form action={async () => {
                            "use server";
                            await signIn("google", {
                                redirectTo: '/onboarding',
                            });
                        }}>
                            <GeneralSubmitButton variant={'outline'} text="Login with Google" width="w-full"/>
                        </form>
                        
                        <form action={async () => {
                            "use server";
                            await signIn("github", {
                                redirectTo: '/onboarding',
                            })
                        }}>
                            <GeneralSubmitButton variant={'outline'} text="Login with Github" width="w-full"/>
                        </form>
                    </div>
                </CardContent>
            </Card>
             <div className='text-center text-xs text-muted-foreground text-balance'>
                By Clicking continue, you agree to our Terms of Service and Privacy Policy.
             </div>
        </div>
    )
}
