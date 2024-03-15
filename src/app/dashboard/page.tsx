// "use client"

import { Button } from '@/components/ui/button';
import { LogoutLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from "next/navigation";

const Page = async () => {
    // const { getUser } = getKindeServerSession();
    // const user = getUser()


    // if (!user || !user.id) redirect('/auth-callback?origin=dahboard')
    return (

        <div>
            Welcome to dashboard
            <Button>
                <LogoutLink>
                    Logout
                </LogoutLink>
            </Button>
        </div>
    )
}

export default Page;