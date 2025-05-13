"use client";
import { useRouter } from '@/i18n/routing';
import Loading from '@/loading/Loading';
import { useAuthStore } from '@/stores/auth/useAuthStore';
import { useLayoutEffect } from 'react';
type ProtectedRouteProps = {
    children: React.ReactNode;
}
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const user = useAuthStore((state) => state.user);
    const router = useRouter();
    useLayoutEffect(() => {
        // check if user is not logged in
        if (!user) {
            router.push('/login');
        }
    }, [user, router]);

    if (!user) {
        return <Loading />;
    }

    return <>{children}</>;
}

export default ProtectedRoute