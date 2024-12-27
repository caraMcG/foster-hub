import { getServerSession } from 'next-auth/next';
import { options } from '../api/auth/[...nextauth]/options';
import UserHomeClient from './UserHomeClient';

export default async function UserHomePage() {
    // Fetch session on the server side
    const session = await getServerSession(options);
    
    if (!session) {

    // redirect('/api/auth/signin?callbackUrl=/dashboard');
    return (
        <div>
            <p>You need to sign in to view this page.</p>
        </div>
    );
    }

    // Pass session to the client component
    return <UserHomeClient session={session} />;
}
